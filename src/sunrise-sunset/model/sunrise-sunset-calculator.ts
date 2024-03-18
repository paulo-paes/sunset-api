import { DateUtil } from '../../util/date-util';
import { SunriseSunsetOutput } from './sunrise-sunset-output';

export class SunriseSunsetCalculator {
  private remainingDatetime: string = '';
  private exactDatetime: string;
  private requestDatetime: string;
  private _requestDatetime: Date;
  private eventTime: Date;

  constructor(eventTime: Date) {
    this.eventTime = eventTime;
    this._requestDatetime = new Date();
    this.requestDatetime = DateUtil.formatDate(this._requestDatetime);
    this.exactDatetime = DateUtil.formatDate(this.eventTime);
    this.calculateRemainingTime();
  }

  /**
   * Calculate diff in milliseconds between event time and request time
   * then convert to hours, minutes and seconds. If negative return 0
   */
  private calculateRemainingTime() {
    const diff = this.eventTime.getTime() - this._requestDatetime.getTime();
    // if diff is odd, add one second to the remaining time
    const addOneSecond = !((diff / 1000) % 2 === 0);
    const hours = Math.max(Math.floor(diff / 1000 / 60 / 60), 0);
    const minutes = Math.max(Math.floor(diff / 1000 / 60) - hours * 60, 0);
    const seconds = Math.max(
      Math.floor(diff / 1000) - minutes * 60 - hours * 60 * 60,
      0,
    );
    this.remainingDatetime = DateUtil.padStartHours(
      hours,
      minutes,
      seconds + (addOneSecond ? 1 : 0),
    );
  }

  public serialize(): SunriseSunsetOutput {
    return new SunriseSunsetOutput(
      this.exactDatetime,
      this.remainingDatetime,
      this.requestDatetime,
    );
  }
}
