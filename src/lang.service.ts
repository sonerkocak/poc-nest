import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { ChatOpenAI } from '@langchain/openai';

@Injectable()
export class LangService {
  private readonly apiKey: string;
  private readonly apiUrl: string;

  constructor(private readonly httpService: HttpService) {
    this.apiKey = process.env.OPENAI_API_KEY;
    console.log('apiKey', this.apiKey);
    this.apiUrl = 'https://api.openai.com/v1/chat/completions';
  }

  getLang(): string {
    return 'lang';
  }

  async generateResponse(content: string): Promise<string> {
    const data = {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content }],
      temperature: 0.7,
    };

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    };

    const result = await firstValueFrom(
      this.httpService.post(this.apiUrl, data, {
        headers: headers,
      }),
    );

    return result.data.choices[0].message.content;
  }

  async generateLangchain(content: string): Promise<string> {
    const chatModel = new ChatOpenAI({
      openAIApiKey: this.apiKey,
    });

    const res = await chatModel.invoke(content);
    if (typeof res.content === 'string') {
      return res.content;
    }
    return 'N/A';
  }
}
