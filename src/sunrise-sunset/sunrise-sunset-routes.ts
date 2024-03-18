import Router from 'koa-router';
import { SunriseSunsetController } from './sunrise-sunset-controller';
import { sunriseSunsetService } from '../factory/service-factory';

export const sunriseSunsetRoutes = () => {
  const router = new Router();

  const controller = new SunriseSunsetController(sunriseSunsetService);
  router.get('/sunrise-sunset', controller.getSunriseSunset.bind(controller));

  return router.routes();
};
