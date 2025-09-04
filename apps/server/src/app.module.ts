import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShowsController } from './shows/shows.controller';
import { ShowsService } from './shows/shows.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, ShowsController],
  providers: [AppService, ShowsService],
})
export class AppModule {}
