import { RestError } from '../errors/rest-error';
import { SunriseSunsetApiService } from '../service/sunrise-sunset-api-service';
import { DateUtil } from '../util/date-util';
import { SunriseSunset } from './model/sunrise-sunset';
import { SunriseSunsetCalculator } from './model/sunrise-sunset-calculator';
import { SunriseSunsetInput } from './model/sunrise-sunset-input';
import { SunriseSunsetOutput } from './model/sunrise-sunset-output';

export class SunriseSunsetService {
  constructor(private sunriseSunsetApiService: SunriseSunsetApiService) {}
  async get(
    input: SunriseSunsetInput,
    date: Date = new Date(),
  ): Promise<SunriseSunsetOutput> {
    const { data } = await this.sunriseSunsetApiService.getSuntimes(
      input.latitude,
      input.longitude,
      DateUtil.convertDateToString(date),
    );

    return new SunriseSunsetCalculator(
      new Date(data.results[input.type]),
    ).serialize();
  }
}
