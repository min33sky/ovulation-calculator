import { createContext, useContext, useState } from 'react';

interface OutcomesState {
  fertileWindow: [Date, Date] | [null, null];
  ovulationDate: Date | null;
  nextPeriod: Date | null;
  pregnancyTestDay: Date | null;
  expectedDueDate: Date | null;
  changeFertileWindow: (fertileWindow: [Date, Date] | [null, null]) => void;
  changeOvulationDate: (ovulationDate: Date | null) => void;
  changeNextPeriod: (nextPeriod: Date | null) => void;
  changePregnancyTestDay: (pregnancyTestDay: Date | null) => void;
  changeExpectedDueDate: (expectedDueDate: Date | null) => void;
}

const OutcomesContext = createContext<OutcomesState>({
  fertileWindow: [null, null],
  ovulationDate: null,
  nextPeriod: null,
  pregnancyTestDay: null,
  expectedDueDate: null,
  changeFertileWindow: () => {},
  changeOvulationDate: () => {},
  changeNextPeriod: () => {},
  changePregnancyTestDay: () => {},
  changeExpectedDueDate: () => {},
});

export default function OutcomesContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [fertileWindow, setFertileWindow] = useState<
    [Date, Date] | [null, null]
  >([null, null]);

  const [ovulationDate, setOvulationDate] = useState<Date | null>(null);
  const [nextPeriod, setNextPeriod] = useState<Date | null>(null);
  const [pregnancyTestDay, setPregnancyTestDay] = useState<Date | null>(null);
  const [expectedDueDate, setExpectedDueDate] = useState<Date | null>(null);

  const changeFertileWindow = (fertileWindow: [Date, Date] | [null, null]) => {
    setFertileWindow(fertileWindow);
  };

  const changeOvulationDate = (ovulationDate: Date | null) => {
    setOvulationDate(ovulationDate);
  };

  const changeNextPeriod = (nextPeriod: Date | null) => {
    setNextPeriod(nextPeriod);
  };

  const changePregnancyTestDay = (pregnancyTestDay: Date | null) => {
    setPregnancyTestDay(pregnancyTestDay);
  };

  const changeExpectedDueDate = (expectedDueDate: Date | null) => {
    setExpectedDueDate(expectedDueDate);
  };

  return (
    <OutcomesContext.Provider
      value={{
        fertileWindow,
        ovulationDate,
        nextPeriod,
        pregnancyTestDay,
        expectedDueDate,
        changeFertileWindow,
        changeOvulationDate,
        changeNextPeriod,
        changePregnancyTestDay,
        changeExpectedDueDate,
      }}
    >
      {children}
    </OutcomesContext.Provider>
  );
}

export function useOutcomesContext() {
  const context = useContext(OutcomesContext);

  if (!context) {
    throw new Error(
      'useOutcomesContext must be used within a OutcomesContextProvider',
    );
  }

  return context;
}
