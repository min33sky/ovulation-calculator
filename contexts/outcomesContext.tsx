import { createContext } from 'react';

interface OutcomesState {
  fertileWindow: Date[];
  ovulationDate: Date | null;
  nextPeriod: Date | null;
  pregnancyTestDay: Date | null;
  expectedDueDate: Date | null;
}

const OutcomesContext = createContext<OutcomesState>({
  fertileWindow: [],
  ovulationDate: null,
  nextPeriod: null,
  pregnancyTestDay: null,
  expectedDueDate: null,
});
