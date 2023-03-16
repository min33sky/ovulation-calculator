'use client';

import Calculator from '@/components/Calculator';

export default function Home() {
  return (
    <main>
      <div className="py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-2 lg:px-4">
          <div className="sm:text-center">
            <h2 className="text-lg font-semibold leading-8 text-indigo-500">
              배란일 계산기
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              배란 주기를 결정하세요.
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              이 계산기를 사용하여 배란 가능성이 높은 시기를 식별하여 가임일을
              파악하세요. 생리 기간은 사람마다 다르고, 달마다 다를 수 있기
              때문에 이 도구는 여러분이 자신의 주기를 더 잘 이해할 수 있도록
              도와줍니다.
            </p>
          </div>

          <Calculator />
        </div>
      </div>
    </main>
  );
}
