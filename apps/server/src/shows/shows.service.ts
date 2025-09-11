import { Injectable } from '@nestjs/common';
import { prisma, Image_Type } from 'database';
import type { Show, Prisma } from 'database';
import type {
  MovieDetail,
  SerieDetail,
  SeasonDetail,
  TrendingResponse,
} from 'common/types';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ShowsService {
  private readonly configService: ConfigService;
  private readonly TMDB_API_KEY: string;

  constructor(configService: ConfigService) {
    this.configService = configService;
    this.TMDB_API_KEY = configService.get<string>('TMDB_API_KEY') || '';
  }

  fetch(input: RequestInfo, init?: RequestInit): Promise<Response> {
    const headers = new Headers(init?.headers);
    headers.set('Authorization', `Bearer ${this.TMDB_API_KEY}`);
    return globalThis.fetch(input, { ...init, headers });
  }
  async getShowById({ id, type }: { id: number; type: 'movie'}): Promise<MovieWithImages> 
  async getShowById({ id, type }: { id: number; type: 'tv' }): Promise<SerieWithSeason> 
  async getShowById({ id, type }: { id: number; type: 'movie' | 'tv' }): Promise<MovieWithImages | SerieWithSeason> {
    return type === 'movie'
      ? (this.getMovie(id))
      : (this.getSerie(id));
  }

  async getMovie(id: number): Promise<MovieWithImages> {
    const bddResult = await prisma.show.findFirst({
      where: {
        tmdbId: id,
        type: 'MOVIE',
      },
      include: {
        images: true,
      },
    });
    // Movie found in the database
    if (bddResult) {
      console.log(`Movie with ID ${id} found in the database.`);
      return bddResult;
    }
    console.log(
      `Movie with ID ${id} not found in the database. Fetching from TMDB...`,
    );

    // Movie not found in the database, fetch from TMDB
    const data = await this.getFromTmdb({ id, type: 'movie' });
    // Add the movie to the database
    const res = await prisma.show.create({
      data: {
        tmdbId: data.id,
        adult: data.adult,
        name: data.title,
        type: 'MOVIE',
        popularity: data.popularity,
      },
    });

    const images: { url: string; type: Image_Type; tmdbId?: number }[] = [];

    if (data.backdrop_path) {
      images.push({
        url: data.backdrop_path,
        type: Image_Type.BACKDROP,
        tmdbId: data.id,
      });
    }
    if (data.poster_path) {
      images.push({
        url: data.poster_path,
        type: Image_Type.POSTER,
        tmdbId: data.id,
      });
    }

    await prisma.tMDBImage.createMany({
      data: images.map((image) => ({
        type: image.type,
        url: image.url,
        showId: res.id,
      })),
    });

    return (await prisma.show.findUnique({
      where: {
        id: res.id,
      },
      include: {
        images: true,
      },
    })) as MovieWithImages;
  }

  async getSerie(id: number): Promise<SerieWithSeason> {
    const bddResult = await prisma.show.findUnique({
      where: {
        tmdbId: id,
        type: 'SERIES',
      },
      include: {
        seasons: true,
        images: true,
      },
    });
    // Movie found in the database
    if (bddResult) {
      return bddResult;
    }

    // Movie not found in the database, fetch from TMDB
    const data = await this.getFromTmdb({ id, type: 'tv' });

    const images: {
      url: string;
      type: Image_Type;
      tmdbId?: number;
      targetType?: 'SHOW' | 'SEASON' | 'EPISODE';
    }[] = [];

    const seasonsCreate = await Promise.all(
      data.seasons.map(async (season) => {
        const seasonResponse = await this.fetch(
          `https://api.themoviedb.org/3/tv/${id}/season/${season.season_number}`,
        );
        if (!seasonResponse.ok) {
          throw new Error(
            `Error fetching season ${season.season_number} for serie with ID ${id}: ${seasonResponse.statusText}`,
          );
        }
        const seasonData: SeasonDetail = await seasonResponse.json();

        // Add the season poster to the images array
        if (seasonData.poster_path) {
          images.push({
            url: seasonData.poster_path,
            type: Image_Type.POSTER,
            targetType: 'SEASON',
            tmdbId: seasonData.id,
          });
        }

        // Add the episodes stills to the images array
        seasonData.episodes.forEach((episode) => {
          if (episode.still_path) {
            images.push({
              url: episode.still_path,
              type: Image_Type.STILL,
              targetType: 'EPISODE',
              tmdbId: episode.id,
            });
          }
        });

        return {
          number: season.season_number,
          updatedAt: new Date(),
          tmdbId: seasonData.id,
          episodes: {
            create: seasonData.episodes.map((episode) => ({
              tmdbId: episode.id,
              number: episode.episode_number,
              name: episode.name,
              duration: episode.runtime,
            })),
          },
        };
      }),
    );

    // Add the series poster and backdrop to the images array
    if (data.poster_path) {
      images.push({
        url: data.poster_path,
        type: Image_Type.POSTER,
        targetType: 'SHOW',
        tmdbId: data.id,
      });
    }
    if (data.backdrop_path) {
      images.push({
        url: data.backdrop_path,
        type: Image_Type.BACKDROP,
        targetType: 'SHOW',
        tmdbId: data.id,
      });
    }

    // Add the movie to the database
    const res = await prisma.show.create({
      data: {
        tmdbId: data.id,
        adult: data.adult,
        name: data.name,
        type: 'SERIES',
        popularity: data.popularity,
        seasons: {
          create: seasonsCreate,
        },
      },
    });

    //add the images to the database
    for (const image of images) {
      if (image.targetType === 'SHOW') {
        await prisma.tMDBImage.create({
          data: {
            type: image.type,
            url: image.url,
            show: {
              connect: {
                id: res.id,
              },
            },
          },
        });
      }

      if (image.targetType === 'SEASON') {
        if (image.tmdbId === undefined) continue;
        await prisma.tMDBImage.create({
          data: {
            type: image.type,
            url: image.url,
            season: {
              connect: {
                tmdbId: image.tmdbId,
              },
            },
          },
        });
      }

      if (image.targetType === 'EPISODE') {
        if (image.tmdbId === undefined) continue;
        await prisma.tMDBImage.create({
          data: {
            type: image.type,
            url: image.url,
            episode: {
              connect: {
                tmdbId: image.tmdbId,
              },
            },
          },
        });
      }
    }

    return (await prisma.show.findUnique({
      where: {
        id: res.id,
      },
      include: {
        seasons: true,
        images: true,
      },
    })) as SerieWithSeason;
  }

  async getTrending(
    offset: number = 1,
  ): Promise<(MovieWithImages | SerieWithSeason)[]> {
    if (offset > 500) {
      throw new Error('Offset must be between 1 and 500');
    }
    const response = await this.fetch(
      `https://api.themoviedb.org/3/trending/all/day?page=${offset}`,
    );
    if (!response.ok) {
      throw new Error(`Error fetching trending: ${response.statusText}`);
    }

    const data: TrendingResponse = await response
      .json()
      .catch(() => ({ page: 0, results: [] }));
    const shows: Promise<MovieWithImages | SerieWithSeason>[] = [];

    for (const item of data.results) {
      if (item.media_type === 'movie') {
        const movie = this.getMovie(item.id);
        shows.push(movie);
      } else if (item.media_type === 'tv') {
        const serie = this.getSerie(item.id);
        shows.push(serie);
      }
    }
    return Promise.all(shows);
  }

  async getFromTmdb({
    id,
    type,
  }: {
    id: number;
    type: 'movie';
  }): Promise<MovieDetail>;
  async getFromTmdb({
    id,
    type,
  }: {
    id: number;
    type: 'tv';
  }): Promise<SerieDetail>;
  async getFromTmdb({
    id,
    type,
  }: {
    id: number;
    type: 'movie' | 'tv';
  }): Promise<MovieDetail | SerieDetail> {
    if (type === 'movie') {
      const response = await this.fetch(
        `https://api.themoviedb.org/3/movie/${id}`,
      );
      if (!response.ok) {
        if (response.status === 404) {
          throw new ShowNotFoundError(`Movie with ID ${id} not found`);
        }
        throw new Error(
          `Error fetching movie with ID ${id}: ${response.statusText}`,
        );
      }
      const data: MovieDetail = await response.json();
      return data;
    } else {
      const response = await this.fetch(
        `https://api.themoviedb.org/3/tv/${id}`,
      );
      if (!response.ok) {
        if (response.status === 404) {
          throw new ShowNotFoundError(`Serie with ID ${id} not found`);
        }
        throw new Error(
          `Error fetching serie with ID ${id}: ${response.statusText}`,
        );
      }

      const data: SerieDetail = await response.json();
      return data;
    }
  }
}

export class ShowNotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ShowNotFoundError';
  }
}

type MovieWithImages = Prisma.ShowGetPayload<{
  where: {
    tmdbId: number;
    type: 'MOVIE';
  };
  include: {
    images: true;
  };
}>;

type SerieWithSeason = Prisma.ShowGetPayload<{
  where: {
    tmdbId: number;
    type: 'SERIES';
  };
  include: {
    seasons: true;
    images: true;
  };
}>;
