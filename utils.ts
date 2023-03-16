import { addDays, format, isValid } from 'date-fns';
import { DATE_FORMAT } from './app/constants';

/**
 * 가임기 계산 함수
 * @param ovulationDate 배란일
 * @returns [가임기 시작일, 가임기 종료일]
 */
export function calculateFertileWindow(ovulationDate: number) {
  const fertileWindowStart = addDays(ovulationDate, -5);
  const fertileWindowEnd = addDays(ovulationDate, 1);

  return [fertileWindowStart, fertileWindowEnd] as const;
}

export function toFormatted(date: number, formatString = DATE_FORMAT) {
  if (!isValid(date)) {
    return null;
  }

  return format(date, formatString);
}
