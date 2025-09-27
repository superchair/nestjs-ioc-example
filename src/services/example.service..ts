export interface ExampleService {
  get(): string
}

export const ExampleService = Symbol('ExampleService')
