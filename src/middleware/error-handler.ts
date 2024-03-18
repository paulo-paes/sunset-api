import { Context, Next } from 'koa';
import { RestError } from '../errors/rest-error';

export class ErrorHandler {
  async handle(ctx: Context, next: Next) {
    try {
      await next();
    } catch (error: any | RestError) {
      if (error instanceof RestError) {
        ctx.response.status = error.status;
        ctx.response.body = {
          message: error.message,
          errorCode: error.status,
        };
      } else {
        ctx.status = 500;
        ctx.body = {
          message: 'An unexpected error happened',
          errorCode: 500,
        };
      }

      if (ctx.status > 400 && ctx.status < 500) {
        ctx.log.warn(error.message, error.cause);
      } else if (ctx.status >= 500) {
        ctx.log.error(error.message, error.cause);
      }
    }
  }
}
