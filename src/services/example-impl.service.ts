import { Injectable } from '@nestjs/common'
import { ExampleService } from './example.service.'

@Injectable()
export class ExampleServiceImpl implements ExampleService {
  get(): string {
    return 'Hello, World!'
  }
}
