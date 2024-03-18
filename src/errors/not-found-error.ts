import { RestError } from './rest-error';

export class NotFoundError extends RestError {
  constructor(message: string) {
    super(message, 404);
  }
}
