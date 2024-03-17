import { Module } from '@nestjs/common';
import { LangController } from './lang.controller';
import { LangService } from './lang.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [LangController],
  providers: [LangService],
})
export class LangModule {}
