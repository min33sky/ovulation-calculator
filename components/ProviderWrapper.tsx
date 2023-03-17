'use client';

import FormContextProvider from '@/contexts/formContext';
import OutcomesContextProvider from '@/contexts/outcomesContext';

export default function ProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FormContextProvider>
        <OutcomesContextProvider>{children}</OutcomesContextProvider>
      </FormContextProvider>
    </>
  );
}
