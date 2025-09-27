import { Controller, Get, Inject } from '@nestjs/common'
import { ExampleService } from './services/example.service.'

@Controller()
export class AppController {
  constructor(
    @Inject(ExampleService) private readonly appService: ExampleService,
  ) {}

  @Get()
  getHello(): string {
    /**
     * We cannot run this code, but we can write the code that uses the service
     * which will assume the service follows the interface we defined. When the
     * service is implemented, the module will be told what to actually send into
     * the controller.
     */
    return this.appService.get()
  }
}
