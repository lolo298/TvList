import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: false,
    cors: {
      origin: 'http://localhost:5173',
      credentials: true,
    },
  });
  app.setGlobalPrefix('api');
  console.log(process.env)
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap().catch((err) => {
  console.error('Error bootstrapping the application:', err);
  process.exit(1);
});
