import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen('https://adorable-beijinho-78b208.netlify.app', ()=> {
    console.log('ok')
  });
}
bootstrap();
