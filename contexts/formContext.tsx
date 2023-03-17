import { createContext, useContext, useState } from 'react';

interface FormState {
  lastPeriod: Date | null;
  cycleLength: number | null;
  changeLastPeriod: (lastPeriod: Date | null) => void;
  changeCycleLength: (cycleLength: number | null) => void;
}

const FormContext = createContext<FormState>({
  lastPeriod: null,
  cycleLength: null,
  changeLastPeriod: () => {},
  changeCycleLength: () => {},
});

export default function FormContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lastPeriod, setLastPeriod] = useState<Date | null>(null);
  const [cycleLength, setCycleLength] = useState<number | null>(null);

  const changeLastPeriod = (lastPeriod: Date | null) => {
    setLastPeriod(lastPeriod);
  };

  const changeCycleLength = (cycleLength: number | null) => {
    setCycleLength(cycleLength);
  };

  return (
    <FormContext.Provider
      value={{
        lastPeriod,
        cycleLength,
        changeLastPeriod,
        changeCycleLength,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error('useFormContext must be used within a FormContextProvider');
  }

  return context;
}
