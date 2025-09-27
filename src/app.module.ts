import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { ExampleService } from './services/example.service.'
import { ExampleServiceImpl } from './services/example-impl.service'

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: ExampleService,
      useClass: ExampleServiceImpl,
    },
  ],
})
export class AppModule {}
