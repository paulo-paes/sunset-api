import { BadRequestError } from '../../errors/bad-request-error';
import { Validation } from '../../validation/validation';
import { SunriseSunsetInput } from '../model/sunrise-sunset-input';

export class LongitudeValidation implements Validation<SunriseSunsetInput> {
  validate(input: SunriseSunsetInput): void {
    if (!this.valid(input)) {
      throw new BadRequestError('invalid longitude value');
    }
  }

  valid(input: SunriseSunsetInput) {
    if (!input || !input.longitude || isNaN(input.longitude)) return false;
    return Boolean(input.longitude >= -180 && input.longitude <= 180);
  }
}
