export interface SunriseSunsetTimeOutput {
  results: {
    sunrise: Date;
    sunset: Date;
    solar_noon: Date;
    day_length: number;
    civil_twilight_begin: Date;
    civil_twilight_end: Date;
    nautical_twilight_begin: Date;
    nautical_twilight_end: Date;
    astronomical_twilight_begin: Date;
    astronomical_twilight_end: Date;
  };
  status: 'OK' | 'INVALID_REQUEST' | 'INVALID_DATE' | 'UNKNOWN_ERROR';
  tzid: string;
}
