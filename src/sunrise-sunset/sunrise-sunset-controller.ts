import { Context, Next } from 'koa';
import { SunriseSunsetService } from './sunrise-sunset-service';
import { SunriseSunset } from './model/sunrise-sunset';
import { SunriseSunsetInput } from './model/sunrise-sunset-input';
import { Validation } from '../validation/validation';
import { LongitudeValidation } from './validation/longitude-validation';
import { SunriseSunsetTypeValidation } from './validation/sunrise-sunset-type-validation';
import { LatitudeValidation } from './validation/latitude-validation';

export class SunriseSunsetController {
  constructor(private sunriseSunsetService: SunriseSunsetService) {}
  async getSunriseSunset(ctx: Context) {
    ctx.log.info('fetching sunrise sunset time');

    const input = new SunriseSunsetInput(ctx.query);
    ctx.response.body = await this.sunriseSunsetService.get(input);
  }
}
