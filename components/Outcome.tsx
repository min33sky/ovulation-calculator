import { PUBLIC_DATE_FORMAT } from '@/app/constants';
import { toFormatted } from '@/utils';
import React from 'react';
import Card from './Card';
import Headline from './Headline';

interface Props {
  fertileWindow: Date[];
  ovulationDate: Date | null;
  nextPeriod: Date | null;
  pregnancyTestDay: Date | null;
  expectedDueDate: Date | null;
}

export default function Outcome({
  fertileWindow,
  ovulationDate,
  nextPeriod,
  pregnancyTestDay,
  expectedDueDate,
}: Props) {
  return (
    <>
      <Headline
        primary="Outcomes"
        secondary="Start tracking your ovulation today and take control of your fertility journey."
      />

      <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card
          date={toFormatted(Date.now(), PUBLIC_DATE_FORMAT)}
          title="Ovulation Date"
          description="Ovulation date is the day in a woman's menstrual cycle when an egg is released from the ovary and can potentially be fertilized."
        />
      </div>
    </>
  );
}
