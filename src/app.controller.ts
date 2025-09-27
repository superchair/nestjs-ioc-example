import { Controller, Get, Inject } from '@nestjs/common'
import { ExampleService } from './services/example.service.'

@Controller()
export class AppController {
  constructor(
    @Inject(ExampleService) private readonly appService: ExampleService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.get()
  }
}
