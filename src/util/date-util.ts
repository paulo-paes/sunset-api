export class DateUtil {
  public static formatDate(date: Date) {
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    };

    return new Intl.DateTimeFormat(
      'pt-BR',
      options,
    ).format(date);
  }

  public static convertDateToString(date: Date) {
    const year = date
      .getFullYear()
      .toString()
      .padStart(4, '0');
    const month = (date.getMonth() + 1)
      .toString()
      .padStart(2, '0');
    const day = date
      .getDate()
      .toString()
      .padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  public static padStartHours(
    hour: number,
    minute: number,
    second: number,
  ) {
    const stringHour = hour
      .toString()
      .padStart(2, '0');
    const stringMinute = minute
      .toString()
      .padStart(2, '0');
    const stringSecond = second
      .toString()
      .padStart(2, '0');
    return `${stringHour}:${stringMinute}:${stringSecond}`;
  }
}
