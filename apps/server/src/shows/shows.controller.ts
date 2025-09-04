import { Controller, Get } from '@nestjs/common';
import { ShowsService } from './shows.service';
import { ConfigService } from '@nestjs/config';

@Controller('shows')
export class ShowsController {
  constructor(private readonly showsService: ShowsService) {}

  @Get('trending')
  getTrending() {
    return this.showsService.getTrending();
  }
}
