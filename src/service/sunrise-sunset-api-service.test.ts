import { sunriseSunsetApiService } from '../factory/service-factory';
import { DateUtil } from '../util/date-util';

describe('SunriseSunsetApiService', () => {
  test('should work without throwing errors', () => {
    return sunriseSunsetApiService.getSuntimes(
      -23.5653114,
      -46.642659,
      DateUtil.convertDateToString(new Date()),
    ).then((value) => {
      expect(value).toBeDefined();
    })
  });

  test('should be in iso format', () => {
    return sunriseSunsetApiService.getSuntimes(
      -23.5653114,
      -46.642659,
      DateUtil.convertDateToString(new Date()),
    ).then((value) => {
      expect(value.data.results.sunrise).toMatch(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}[+-]\d{2}:\d{2}/);
      expect(value.data.results.sunset).toMatch(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}[+-]\d{2}:\d{2}/);
    })
  });
});
