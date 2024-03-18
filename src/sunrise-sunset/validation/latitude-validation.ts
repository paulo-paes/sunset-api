import { BadRequestError } from '../../errors/bad-request-error';
import { Validation } from '../../validation/validation';
import { SunriseSunsetInput } from '../model/sunrise-sunset-input';

export class LatitudeValidation implements Validation<SunriseSunsetInput> {
  validate(input: SunriseSunsetInput): void {
    if (!this.valid(input)) {
      throw new BadRequestError('invalid latitude value');
    }
  }

  valid(input: SunriseSunsetInput) {
    if (!input || !input.latitude || isNaN(input.latitude)) return false;
    return Boolean(input.latitude >= -90 && input.latitude <= 90);
  }
}
