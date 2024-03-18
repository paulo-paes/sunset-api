import { Validation } from '../../validation/validation';
import { LatitudeValidation } from '../validation/latitude-validation';
import { LongitudeValidation } from '../validation/longitude-validation';
import { SunriseSunsetTypeValidation } from '../validation/sunrise-sunset-type-validation';
import { SunriseSunset } from './sunrise-sunset';

export class SunriseSunsetInput {
  public type: SunriseSunset;
  public latitude: number;
  public longitude: number;

  constructor(data: any) {
    this.type = data?.type?.toLowerCase() as SunriseSunset;
    this.latitude = Number(data?.latitude);
    this.longitude = Number(data?.longitude);

    this.validate();
  }

  validate(): void {
    const validationArray: Validation<any>[] = [
      new SunriseSunsetTypeValidation(),
      new LongitudeValidation(),
      new LatitudeValidation(),
    ];

    validationArray.forEach((v) => v.validate(this));
  }
}
