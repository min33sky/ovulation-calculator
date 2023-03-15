'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameMonth,
  isToday,
  parse,
  startOfToday,
} from 'date-fns';
import { CALENDAR_FORMAT } from '@/app/constants';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

interface Props {
  selected: Date | null;
  onChange: () => void;
}

export default function Calendar({ selected, onChange }: Props) {
  const today = useRef<Date>();
  const [selectedDay, setSelectedDay] = useState<Date>(
    selected ?? today.current!,
  );
  const [currentMonth, setCurrentMonth] = useState(
    format(today.current ?? Date.now(), CALENDAR_FORMAT),
  );

  console.log('투데이: ', today.current);

  // 이번 달의 첫번째 날짜를 구한다.
  let firstDayCurrentMonth = parse(currentMonth, CALENDAR_FORMAT, new Date());

  // 이번 달의 모든 날짜를 구한다.
  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  // 지난 달로 변경
  const previousMonth = useCallback(() => {
    let firstDayPreviousMonth = add(firstDayCurrentMonth, {
      months: -1,
    });
    setCurrentMonth(format(firstDayPreviousMonth, CALENDAR_FORMAT));
  }, [firstDayCurrentMonth]);

  // 다음 달로 변경
  const nextMonth = useCallback(() => {
    let firstDayNextMonth = add(firstDayCurrentMonth, {
      months: 1,
    });
    setCurrentMonth(format(firstDayNextMonth, CALENDAR_FORMAT));
  }, [firstDayCurrentMonth]);

  console.log('currentMonth', currentMonth, firstDayCurrentMonth);

  // TODO: handleChange
  const handleChange = useCallback((day: Date) => {}, []);

  useEffect(() => {
    if (!today.current) {
      today.current = startOfToday();
    }
  }, []);

  useEffect(() => {
    if (!selected) {
      setSelectedDay(today.current!);
    }
  }, [selected]);

  console.log('selectedDay', selectedDay);

  return (
    <div className="overflow-hidden shadow sm:rounded-md">
      <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
        <div className="mx-auto max-w-md px-4 sm:px-7 md:max-w-4xl md:px-6">
          <div className="flex items-center">
            <h2 className="flex-auto font-semibold text-slate-900">
              {format(firstDayCurrentMonth, 'MMMM yyyy')}
            </h2>
            <button
              type="button"
              onClick={previousMonth}
              className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Previous month</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              onClick={nextMonth}
              type="button"
              className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Next month</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-10 grid grid-cols-7 text-center text-xs leading-6 text-gray-500">
            <div>S</div>
            <div>M</div>
            <div>T</div>
            <div>W</div>
            <div>T</div>
            <div>F</div>
            <div>S</div>
          </div>
          <div className="mt-2 grid grid-cols-7 text-sm">
            {days.map((day, dayIdx) => (
              <div
                key={day.toString()}
                className={classNames(
                  dayIdx === 0 && colStartClasses[getDay(day)],
                  'py-1.5',
                )}
              >
                <button
                  type="button"
                  onClick={() => handleChange(day)}
                  className={classNames(
                    isEqual(day, selectedDay) && 'text-white',
                    !isEqual(day, selectedDay) &&
                      isToday(day) &&
                      'text-teal-500',
                    !isEqual(day, selectedDay) &&
                      !isToday(day) &&
                      isSameMonth(day, firstDayCurrentMonth) &&
                      'text-slate-900',
                    !isEqual(day, selectedDay) &&
                      !isToday(day) &&
                      !isSameMonth(day, firstDayCurrentMonth) &&
                      'text-gray-400',
                    isEqual(day, selectedDay) && isToday(day) && 'bg-teal-500',
                    isEqual(day, selectedDay) &&
                      !isToday(day) &&
                      'bg-indigo-500',
                    !isEqual(day, selectedDay) && 'hover:bg-gray-200',
                    (isEqual(day, selectedDay) || isToday(day)) &&
                      'font-semibold',
                    'mx-auto flex h-8 w-8 items-center justify-center rounded-full',
                  )}
                >
                  <time dateTime={format(day, 'yyyy-MM-dd')}>
                    {format(day, 'd')}
                  </time>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

let colStartClasses = [
  '',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7',
];
