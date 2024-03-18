import { SunriseSunsetApiService } from '../service/sunrise-sunset-api-service';
import { SunriseSunsetService } from '../sunrise-sunset/sunrise-sunset-service';

export const sunriseSunsetApiService = new SunriseSunsetApiService();
export const sunriseSunsetService = new SunriseSunsetService(sunriseSunsetApiService);
