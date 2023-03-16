'use client';

import Calculator from '@/components/Calculator';
import Calendar from '@/components/Calendar';

export default function Home() {
  return (
    <main>
      <div className="py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-2 lg:px-4">
          {/* TODO: Hero Section UI */}
          <div className="sm:text-center">
            <h2 className="text-lg font-semibold leading-8 text-indigo-500">
              Ovulation Calculator
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Determine your ovulation cycle.
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Use this calculator to pinpoint your most fertile days by
              identifying when you are likely ovulating. Menstrual periods can
              vary from person to person and month to month, so this tool help
              you better understand your own cycle.
            </p>
          </div>

          <Calculator />

          <div className="mt-20 py-4 text-center">
            <p className="text-gray-400">Powered by</p>
            <a
              href="https://linktr.ee/codeofrelevancy?utm_source=weather-app&utm_medium=cpc&utm_campaign=promotion"
              className="font-medium text-indigo-500"
              target="_blank"
              rel="noreferrer"
            >
              Code of Relevancy
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
