import axios from 'axios';
import { SunriseSunsetTimeOutput } from './model/sunrise-sunset-time-output';

export class SunriseSunsetApiService {
  private readonly baseUrl = 'https://api.sunrise-sunset.org/json';
  async getSuntimes(
    latitude: number,
    longitude: number,
    date: string,
    tzid: string = 'America/Sao_Paulo',
  ) {
    return axios.get<SunriseSunsetTimeOutput>(this.baseUrl, {
      params: {
        lat: latitude,
        lng: longitude,
        date,
        tzid,
        formatted: 0,
      },
    });
  }
}
