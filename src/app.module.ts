import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LangModule } from './lang.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [LangModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
