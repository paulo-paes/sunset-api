import Router from 'koa-router';
import { sunriseSunsetRoutes } from './sunrise-sunset/sunrise-sunset-routes';

export const routes = () => {
  const router = new Router();

  router.use(sunriseSunsetRoutes());

  return router.routes();
};
