import React from 'react';
import Tag from './Tag';

interface Props {
  onQuickSelection: (value: number) => void;
}

export default function CycleLength({ onQuickSelection }: Props) {
  return (
    <article className="mt-6 flex flex-1 flex-col sm:items-stretch sm:justify-start md:flex-row">
      <div className="mb-2 flex items-center md:mb-0">
        <span className="text-sm font-medium text-gray-400">빠른 선택</span>
      </div>

      <div className="md:ml-6">
        <div className="flex space-x-4">
          <Tag onQuickSelection={onQuickSelection} value={27} />
          <Tag onQuickSelection={onQuickSelection} value={28} />
          <Tag onQuickSelection={onQuickSelection} value={29} />
          <Tag onQuickSelection={onQuickSelection} value={30} />
          <Tag onQuickSelection={onQuickSelection} value={31} />
        </div>
      </div>
    </article>
  );
}
