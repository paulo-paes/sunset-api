import { SunriseSunsetCalculator } from './sunrise-sunset-calculator';

describe('SunriseSunsetCaculator', () => {
  test('should work without throwing errors', () => {
    const calculator = new SunriseSunsetCalculator(new Date());
    expect(calculator).toBeDefined();
  });

  test('should return a valid output', () => {
    const calculator = new SunriseSunsetCalculator(new Date());
    const output = calculator.serialize();
    expect(output).toBeDefined();
    expect(output.exact_datetime).toBeDefined();
    expect(output.remaining_time).toBeDefined();
    expect(output.request_datetime).toBeDefined();
  });

  test('output should have the correct format', () => {
    const calculator = new SunriseSunsetCalculator(new Date());
    const output = calculator.serialize();
    expect(output.exact_datetime).toMatch(
      /\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}:\d{2}/,
    );
    expect(output.remaining_time).toMatch(/\d{2}:\d{2}:\d{2}/);
    expect(output.request_datetime).toMatch(
      /\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}:\d{2}/,
    );
  });

  test('should calculate correctly the remaining time', () => {
    const calculator = new SunriseSunsetCalculator(
      new Date(new Date().getTime() + 1000 * 60 * 60),
    );
    const output = calculator.serialize();
    expect(output.remaining_time).toMatch('01:00:00');
  });
});
