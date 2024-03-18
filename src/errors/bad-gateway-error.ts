import { RestError } from './rest-error';

export class BadGatewayError extends RestError {
  constructor(message: string) {
    super(message, 502);
  }
}
