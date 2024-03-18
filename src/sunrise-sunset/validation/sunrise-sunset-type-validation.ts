import { SunriseSunset } from '../model/sunrise-sunset';
import { Validation } from '../../validation/validation';
import { SunriseSunsetInput } from '../model/sunrise-sunset-input';
import { BadRequestError } from '../../errors/bad-request-error';

export class SunriseSunsetTypeValidation implements Validation<SunriseSunsetInput> {
  validate(input: SunriseSunsetInput): void {
    if (!this.valid(input)) {
      throw new BadRequestError('invalid type');
    }
  }

  valid(input: SunriseSunsetInput) {
    if (!input || !input.type) return false;
    return Object.values(SunriseSunset).includes(input.type);
  }
}
