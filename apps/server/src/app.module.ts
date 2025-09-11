import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShowsController } from './shows/shows.controller';
import { ShowsService } from './shows/shows.service';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from '@thallesp/nestjs-better-auth';
import { auth } from './auth';
import { ProtectedController } from './protected/protected.controller';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule.forRoot(auth)],
  controllers: [AppController, ShowsController, ProtectedController],
  providers: [AppService, ShowsService],
})
export class AppModule {}
