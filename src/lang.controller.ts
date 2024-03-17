import { Controller, Get, Query } from '@nestjs/common';
import { LangService } from './lang.service';

@Controller('lang')
export class LangController {
  constructor(private readonly langService: LangService) {}

  @Get('direct')
  async getDirect(@Query('question') question): Promise<string> {
    return this.langService.generateResponse(question);
  }

  @Get('langchain')
  async getLangchain(@Query('question') question): Promise<string> {
    return this.langService.generateLangchain(question);
  }
}
