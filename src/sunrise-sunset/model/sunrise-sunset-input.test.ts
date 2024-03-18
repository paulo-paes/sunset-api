import { SunriseSunsetInput } from './sunrise-sunset-input';

describe('SunriseSunsetInput', () => {
  test('should work without throwing errors', () => {
    const input = new SunriseSunsetInput({
      type: 'sunrise',
      latitude: -23.5653114,
      longitude: -46.642659,
    });
    expect(input).toBeDefined();
  });

  test('should fail object creation if type is not valid', () => {
    expect(() => {
      new SunriseSunsetInput({
        type: 'invalid',
        latitude: -23.5653114,
        longitude: -46.642659,
      });
    }).toThrow();
  });

  test('should fail object creation if latitude is not valid', () => {
    expect(() => {
      new SunriseSunsetInput({
        type: 'sunrise',
        latitude: 'invalid',
        longitude: -46.642659,
      });
    }).toThrow();
  });

  test('should fail object creation if longitude is not valid', () => {
    expect(() => {
      new SunriseSunsetInput({
        type: 'sunrise',
        latitude: -23.5653114,
        longitude: 'invalid',
      });
    }).toThrow();
  });

  test('should fail object creation if type is not provided', () => {
    expect(() => {
      new SunriseSunsetInput({
        latitude: -23.5653114,
        longitude: -46.642659,
      });
    }).toThrow();
  });

  test('should fail if latitude is not between -90 and 90', () => {
    expect(() => {
      new SunriseSunsetInput({
        type: 'sunrise',
        latitude: -100,
        longitude: -46.642659,
      });
    }).toThrow();
  });

  test('should fail if longitude is not between -180 and 180', () => {
    expect(() => {
      new SunriseSunsetInput({
        type: 'sunrise',
        latitude: -23.5653114,
        longitude: 200,
      });
    }).toThrow();
  });
});
