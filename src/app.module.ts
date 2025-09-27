import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
// import { ExampleService } from './services/example.service.'
// import { ExampleServiceImpl } from './services/example-impl.service'

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    /**
     * We can leave this commented out for now, because the implementation
     * is incomplete, but when the implementation is ready, we can
     * uncomment this and the module will know what to inject into
     * the controller.
     */
    // {
    //   provide: ExampleService,
    //   useClass: ExampleServiceImpl,
    // },
  ],
})
export class AppModule {}
