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
import { ko } from 'date-fns/locale';
import { CALENDAR_FORMAT } from '@/app/constants';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

interface Props {
  selected: Date | null;
  onChange: (value: Date) => void;
}

export default function Calendar({ selected, onChange }: Props) {
  const today = useRef<Date>();
  const [selectedDay, setSelectedDay] = useState<Date>(
    selected ?? today.current!,
  );
  const [currentMonth, setCurrentMonth] = useState(
    format(today.current ?? Date.now(), CALENDAR_FORMAT),
  );

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

  const handleChange = useCallback(
    (day: Date) => {
      setSelectedDay(day);
      onChange(day);
    },
    [onChange],
  );

  useEffect(() => {
    if (!today.current) {
      today.current = startOfToday();
    }
  }, []);

  useEffect(() => {
    if (!selected && today.current) {
      setSelectedDay(today.current);
    }
  }, [selected]);

  return (
    <article className="overflow-hidden shadow-lg sm:rounded-md">
      <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
        <div className="mx-auto max-w-md border px-4 py-3 sm:px-7 md:max-w-4xl md:px-6">
          <header className="flex items-center">
            <button
              aria-label="Go to previous month"
              title="지난 달"
              type="button"
              onClick={previousMonth}
              className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">지난 달</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>

            <h2 className="flex-auto text-center font-semibold text-slate-900">
              {format(firstDayCurrentMonth, 'yyyy년 M월', { locale: ko })}
            </h2>

            <button
              onClick={nextMonth}
              type="button"
              aria-label="Go to next month"
              title="다음 달"
              className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">다음 달</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </header>

          <div className="mt-10 grid grid-cols-7 text-center text-xs leading-6 text-gray-500">
            <div className="text-red-500">일</div>
            <div>월</div>
            <div>화</div>
            <div>수</div>
            <div>목</div>
            <div>금</div>
            <div>토</div>
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
    </article>
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
