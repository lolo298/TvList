interface MediaDetailBase {
	adult: boolean;
	backdrop_path: string;
	genres: Tags[];
	homepage: string;
	id: number;
	origin_country: string[];
	original_language: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: ProductionCompany[];
	production_countries: ProductionCountry[];
	spoken_languages: SpokenLanguage[];
	status: string;
	tagline: string;
	vote_average: number;
	vote_count: number;
}

export interface SerieDetail extends MediaDetailBase {
	created_by: Creator[];
	episode_run_time: number[];
	first_air_date: string;
	in_production: boolean;
	languages: string[];
	last_air_date: string;
	last_episode_to_air: LastEpisodeToAir;
	name: string;
	next_episode_to_air: string | null;
	networks: Network[];
	number_of_episodes: number;
	number_of_seasons: number;
	original_name: string;
	seasons: Season[];
	type: string;
}

export interface MovieDetail extends MediaDetailBase {
	belongs_to_collection: BelongsToCollection;
	budget: number;
	imdb_id: string;
	original_title: string;
	release_date: string;
	revenue: number;
	runtime: number;
	title: string;
	video: boolean;
}

interface BelongsToCollection {
	id: number;
	name: string;
	poster_path: string | null;
	backdrop_path: string;
}

interface ProductionCompany {
	id: number;
	logo_path: string;
	name: string;
	origin_country: string;
}

interface ProductionCountry {
	iso_3166_1: string;
	name: string;
}

export interface SeasonDetail {
	_id: string;
	air_date: string;
	episodes: Episode[];
	name: string;
	overview: string;
	id: number;
	poster_path: string | null;
	season_number: number;
	vote_average: number;
}

interface Episode {
	air_date: string;
	episode_number: number;
	episode_type: string;
	id: number;
	name: string;
	overview: string;
	production_code: string;
	runtime: number;
	season_number: number;
	show_id: number;
	still_path: string | null;
	vote_average: number;
	vote_count: number;
	crew: Crew[];
	guest_stars: GuestStar[];
}

interface Crew {
	department: string;
	job: string;
	credit_id: string;
	adult: boolean;
	gender: number;
	id: number;
	known_for_department: string;
	name: string;
	original_name: string;
	popularity: number;
	profile_path: string;
}

interface GuestStar {
	character: string;
	credit_id: string;
	order: number;
	adult: boolean;
	gender: number;
	id: number;
	known_for_department: string;
	name: string;
	original_name: string;
	popularity: number;
	profile_path: string;
}

interface Tags {
	id: number;
	name: string;
}

enum Gender {
	MALE,
	FEMALE
}

interface Creator {
	id: number;
	credit_id: string;
	name: string;
	gender: Gender;
	profile_path: string;
}

interface LastEpisodeToAir {
	id: number;
	name: string;
	overview: string;
	vote_average: number;
	vote_count: number;
	air_date: string;
	episode_number: number;
	episode_type: string;
	production_code: string;
	runtime: number;
	season_number: number;
	show_id: number;
	still_path: string;
}

interface Network {
	id: number;
	logo_path: string;
	name: string;
	origin_country: string;
}

interface Season {
	air_date: string;
	episode_count: number;
	id: number;
	name: string;
	overview: string;
	poster_path: string | null;
	season_number: number;
	vote_average: number;
}

interface SpokenLanguage {
	english_name: string;
	iso_639_1: string;
	name: string;
}
