import React from 'react';

interface Props {
  date: string | null;
  title: string;
  description: string;
}

export default function Card({ date, title, description }: Props) {
  return (
    <article className="rounded-lg bg-slate-700 px-4 py-5 shadow-xl ">
      <h3 className="text-base font-medium tracking-tight text-white">
        {title}
      </h3>
      <p className="mt-2 text-sm text-rose-300">{date}</p>
      <p className="mt-2 break-keep text-sm text-slate-400">{description}</p>
    </article>
  );
}
