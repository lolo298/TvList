import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { ShowNotFoundError, ShowsService } from './shows.service';
import { ConfigService } from '@nestjs/config';
import { prisma } from 'database';

@Controller('shows')
export class ShowsController {
  constructor(private readonly showsService: ShowsService) {}

  @Get('trending')
  getTrending() {
    return this.showsService.getTrending();
  }

  @Get(':type/:id')
  async getShowById(@Param() params: any) {
    if (params.type !== 'movie' && params.type !== 'tv') {
      throw new HttpException('Invalid type', HttpStatus.BAD_REQUEST);
    }

    const id = parseInt(params.id, 10);
    if (isNaN(id)) {
      throw new HttpException('Invalid ID', HttpStatus.BAD_REQUEST);
    }
    try {
      return await this.showsService.getShowById({ id, type: params.type });
    } catch (error) {
      if (error instanceof ShowNotFoundError) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  @Get('tmp')
  async tmp() {
    await prisma.tMDBImage.deleteMany({});
    await prisma.episode.deleteMany({});
    await prisma.season.deleteMany({});
    const tmp = await prisma.show.deleteMany({});

    return tmp;
  }
}
