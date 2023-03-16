import React from 'react';

interface Props {
  date: string | null;
  title: string;
  description: string;
}

export default function Card({ date, title, description }: Props) {
  return (
    <article className="rounded-lg bg-slate-900 px-6 py-8 shadow-xl">
      <div>
        <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 text-white shadow-lg">
          {date}
        </span>
      </div>
      <h3 className="mt-5 text-base font-medium tracking-tight text-white">
        {title}
      </h3>
      <p className="mt-2 text-sm text-slate-400">{description}</p>
    </article>
  );
}
