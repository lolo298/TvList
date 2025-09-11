import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@thallesp/nestjs-better-auth';

@Controller()
@UseGuards(AuthGuard)
export class ProtectedController {
  @Get('protected')
  getProtectedResource() {
    return { message: 'This is a protected resource' };
  }
}
