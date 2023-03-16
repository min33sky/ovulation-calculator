import React from 'react';
import Button from './Button';
import Calendar from './Calendar';
import CycleLength from './CycleLength';
import Headline from './Headline';
import Input from './Input';
import Outcomes from './Outcomes';

export default function Calculator() {
  return (
    <article className="my-10 md:col-span-2">
      <div className="space-y-6 bg-white">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          <div className="col-span-3 sm:col-span-2">
            <div className="rounded-lg p-3 shadow sm:p-4 md:p-6">
              <Headline
                primary="Last period"
                secondary="Choose the starting date of your most recent menstrual cycle."
              />

              <div className="mt-6">
                <Calendar selected={null} onChange={() => {}} />
              </div>
            </div>
          </div>

          <div className="col-span-3 sm:col-span-2">
            <div className="grid grid-cols-1 gap-6">
              <div className="rounded-lg p-3 shadow-md sm:p-4 md:p-6">
                <Headline
                  primary="Cycle length"
                  secondary="Enter the number of days in your menstrual cycle."
                />

                <div className="mt-6">
                  <Input
                    name="cycle_length"
                    type={'number'}
                    placeholder="예. 28"
                    value={1}
                  />
                  <CycleLength onQuickSelection={() => {}} />
                </div>
              </div>

              <div className="rounded-lg p-3 shadow-md sm:p-4 md:p-6">
                <Headline
                  primary="Start over"
                  secondary="Reset the form with ease and begin anew with just one simple click."
                />

                <div className="mt-4">
                  <Button
                    aria-label="Reset Button"
                    title="초기화"
                    onClick={() => window.alert('TODO: Reset')}
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
          {/* TODO: lastPeriod && cycleLength가 True여야 보여주기 */}
          <Outcomes
            fertileWindow={[]}
            expectedDueDate={null}
            nextPeriod={null}
            ovulationDate={null}
            pregnancyTestDay={null}
          />
        </div>
      </div>
    </article>
  );
}
