'use client';

import FormContextProvider from '@/contexts/formContext';

export default function ProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FormContextProvider>{children}</FormContextProvider>
    </>
  );
}
