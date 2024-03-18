import dotenv from 'dotenv';
import Koa from 'koa';
import parser from 'koa-bodyparser';
import cors from '@koa/cors';
import { routes } from './router';
import winston, { Logger } from 'winston';
import { ErrorHandler } from './middleware/error-handler';

export class App {
  private readonly port: number;
  private readonly koa: Koa;
  public static log: Logger;

  constructor() {
    dotenv.config();
    this.port = Number(process.env.PORT) || 8000;
    this.koa = new Koa();
    this.configKoa();
    this.configLog();
  }

  private configKoa(): void {
    const errorHandler = new ErrorHandler();
    this.koa
      .use(parser())
      .use(cors())
      .use(errorHandler.handle.bind(errorHandler))
      .use(routes());
  }

  private configLog(): void {
    App.log = winston.createLogger({
      transports: [new winston.transports.Console()],
    });
    this.koa.context.log = App.log;
  }

  public start(): void {
    this.koa.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}
