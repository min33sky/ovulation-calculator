import { PUBLIC_DATE_FORMAT } from '@/app/constants';
import { toFormatted } from '@/utils';
import React from 'react';
import Card from './Card';
import Headline from './Headline';

interface Props {
  fertileWindow: [Date, Date] | [null, null];
  ovulationDate: Date | null;
  nextPeriod: Date | null;
  pregnancyTestDay: Date | null;
  expectedDueDate: Date | null;
}

/**
 * 결과 뷰어 컴포넌트
 */
export default function Outcomes({
  fertileWindow,
  ovulationDate,
  nextPeriod,
  pregnancyTestDay,
  expectedDueDate,
}: Props) {
  return (
    <div className="px-3">
      <Headline
        primary="결과"
        secondary="배란일을 예측하여 당신의 가임 기간을 알아보세요."
      />

      <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card
          date={`${toFormatted(
            fertileWindow[0]!,
            PUBLIC_DATE_FORMAT,
          )} - ${toFormatted(fertileWindow[1]!, PUBLIC_DATE_FORMAT)}`}
          title="가임기"
          description="가임기는 여성이 임신 가능성이 가장 높은 기간으로, 일반적으로 배란기 즈음에 발생합니다."
        />

        <Card
          date={toFormatted(ovulationDate ?? Date.now(), PUBLIC_DATE_FORMAT)}
          title="배란일"
          description="배란일은 여성의 월경 주기에서 난자가 난소에서 방출되고 잠재적으로 수정될 수 있는 날입니다."
        />

        <Card
          date={toFormatted(nextPeriod ?? Date.now(), PUBLIC_DATE_FORMAT)}
          title="다음 생리일"
          description="당신의 생리주기를 통해 예상되는 다음 생리 날짜입니다."
        />

        <Card
          date={toFormatted(pregnancyTestDay ?? Date.now(), PUBLIC_DATE_FORMAT)}
          title="임신 테스트 날짜"
          description="임신 테스트 날짜는 여성이 임신 여부를 확인하기 위해 임신 테스트를 받는 날짜를 말합니다."
        />

        <Card
          date={toFormatted(expectedDueDate ?? Date.now(), PUBLIC_DATE_FORMAT)}
          title="예상 출산일"
          description="예상 출산일(EDD)은 임산부의 아기가 태어날 것으로 예상되는 날짜입니다. 실제 날짜는 며칠 또는 몇 주 정도 차이가 날 수 있습니다."
        />
      </div>
    </div>
  );
}
