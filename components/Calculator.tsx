import { useFormContext } from '@/contexts/formContext';
import { useOutcomesContext } from '@/contexts/outcomesContext';
import { calculateOutcomes } from '@/utils';
import React, { useCallback, useEffect } from 'react';
import Button from './Button';
import Calendar from './Calendar';
import CycleLength from './CycleLength';
import Headline from './Headline';
import Input from './Input';
import Outcomes from './Outcomes';

export default function Calculator() {
  const { lastPeriod, cycleLength, changeCycleLength, changeLastPeriod } =
    useFormContext();

  const {
    changeExpectedDueDate,
    changeFertileWindow,
    changeNextPeriod,
    changeOvulationDate,
    changePregnancyTestDay,
    expectedDueDate,
    fertileWindow,
    nextPeriod,
    ovulationDate,
    pregnancyTestDay,
  } = useOutcomesContext();

  useEffect(() => {
    if (lastPeriod && cycleLength) {
      const {
        expectedDueDate,
        fertileWindow,
        nextPeriod,
        ovulationDate,
        pregnancyTestDay,
      } = calculateOutcomes(lastPeriod, cycleLength);

      changeNextPeriod(nextPeriod);
      changeExpectedDueDate(expectedDueDate);
      changeOvulationDate(ovulationDate);
      changePregnancyTestDay(pregnancyTestDay);
      changeFertileWindow(fertileWindow);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cycleLength, lastPeriod]);

  /**
   * 생리 주기 변경 핸들러
   */
  const handleCycleLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeCycleLength(Number(e.target.value));
  };

  /**
   * 빠른 선택 핸들러
   */
  const handleQuickSelection = (value: number) => {
    changeCycleLength(value);
  };

  /**
   * 마지막 생리일 변경 핸들러
   */
  const handleLastPeriodChange = (date: Date) => {
    changeLastPeriod(date);
  };

  /**
   * 초기화 핸들러
   */
  const handleReset = useCallback(() => {
    changeCycleLength(null);
    changeLastPeriod(null);
  }, [changeCycleLength, changeLastPeriod]);

  return (
    <article className="my-10 md:col-span-2">
      <div className="space-y-6 bg-white">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          <div className="col-span-3 sm:col-span-2">
            <div className="rounded-lg p-3 shadow sm:p-4 md:p-6">
              <Headline
                primary="마지막 생리일"
                secondary="가장 최근 생리 주기의 시작 날짜를 선택합니다."
              />

              <div className="mt-6">
                <Calendar
                  selected={lastPeriod}
                  onChange={handleLastPeriodChange}
                />
              </div>
            </div>
          </div>

          <div className="col-span-3 sm:col-span-2">
            <div className="grid grid-cols-1 gap-6">
              <div className="rounded-lg p-3 shadow-md sm:p-4 md:p-6">
                <Headline
                  primary="생리 주기"
                  secondary="생리 주기의 일 수를 입력합니다."
                />

                <div className="mt-6">
                  <Input
                    name="cycle_length"
                    type={'number'}
                    placeholder="예. 28"
                    value={cycleLength ?? ''}
                    onChange={handleCycleLengthChange}
                  />
                  <CycleLength onQuickSelection={handleQuickSelection} />
                </div>
              </div>

              <div className="rounded-lg p-3 shadow-md sm:p-4 md:p-6">
                <Headline
                  primary="다시 시작하기"
                  secondary="모든 입력을 초기화하고 다시 시작합니다."
                />

                <div className="mt-4">
                  <Button
                    aria-label="Reset Button"
                    title="초기화"
                    onClick={handleReset}
                    disabled={false}
                  >
                    초기화
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          {lastPeriod && cycleLength && (
            <Outcomes
              fertileWindow={fertileWindow}
              expectedDueDate={expectedDueDate}
              nextPeriod={nextPeriod}
              ovulationDate={ovulationDate}
              pregnancyTestDay={pregnancyTestDay}
            />
          )}
        </div>
      </div>
    </article>
  );
}
