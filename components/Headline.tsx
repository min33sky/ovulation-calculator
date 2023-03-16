import React from 'react';

interface Props {
  primary: string;
  secondary: string;
}

export default function Headline({ primary, secondary }: Props) {
  return (
    <>
      <h3 className="text-lg font-medium leading-6 text-gray-600">{primary}</h3>
      <p className="mt-1 text-sm text-gray-600">{secondary}</p>
    </>
  );
}
