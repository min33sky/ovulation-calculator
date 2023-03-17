import { addDays, addWeeks, format, isValid } from 'date-fns';
import { DATE_FORMAT } from './app/constants';
import { ko } from 'date-fns/locale';

/**
 * 가임기 계산 함수
 * @param ovulationDate 배란일
 * @returns [가임기 시작일, 가임기 종료일]
 */
export function calculateFertileWindow(ovulationDate: Date): [Date, Date] {
  const fertileWindowStart = addDays(ovulationDate, -5);
  const fertileWindowEnd = addDays(ovulationDate, 1);

  return [fertileWindowStart, fertileWindowEnd];
}

/**
 * 배란일 계산 함수
 *
 * - 생리 주기를 28일로 봤을 때(28일마다 생리) 배란은 생리가 있은 날부터 약 2주후에 발생한다.
 * @reference https://www.yuhan.co.kr/Mobile/Customer/Question/?CateId=222&p=3
 *
 * @param lastPeriod 마지막 생리일
 * @param cycleLength 생리 주기
 */
export function calculateOvulationDate(
  lastPeriod: number | Date,
  cycleLength: number,
) {
  return addDays(lastPeriod, cycleLength - 14);
}

/**
 * 다음 생리일 계산 함수
 * @param lastPeriod 지난 생리일
 * @param cycleLength 생리 주기
 */
export function calculateNextPeriod(
  lastPeriod: number | Date,
  cycleLength: number,
) {
  return addDays(lastPeriod, cycleLength);
}

export function calculatePregnancyTestDay(lastPeriod: number | Date) {
  return addWeeks(lastPeriod, 2);
}

export function calculateExpectedDueDate(lastPeriod: number | Date) {
  return addWeeks(lastPeriod, 40);
}

/**
 *
 * @param date
 * @param formatString
 * @returns
 */
export function toFormatted(date: number | Date, formatString = DATE_FORMAT) {
  if (!isValid(date)) {
    return null;
  }

  return format(date, formatString, { locale: ko });
}

/**
 * 결과 계산 함수
 * @param lastPeriod 마지막 생리일
 * @param cycleLength 생리주기
 */
export function calculateOutcomes(
  lastPeriod: number | Date,
  cycleLength: number,
) {
  const ovulationDate = calculateOvulationDate(lastPeriod, cycleLength);
  const fertileWindow = calculateFertileWindow(ovulationDate);
  const nextPeriod = calculateNextPeriod(lastPeriod, cycleLength);
  const pregnancyTestDay = calculatePregnancyTestDay(lastPeriod);
  const expectedDueDate = calculateExpectedDueDate(lastPeriod);

  return {
    ovulationDate,
    fertileWindow,
    nextPeriod,
    pregnancyTestDay,
    expectedDueDate,
  };
}
