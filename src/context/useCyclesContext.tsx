import {
  useMemo,
  useState,
  ReactNode,
  useContext,
  useCallback,
  createContext,
} from "react";

import { ICycle } from "src/@types/cycle";

interface ICyclesContextProviderProps {
  children: ReactNode;
}

interface INewCycleData {
  task: string;
  minutesAmount: number;
}

interface ICyclesContext {
  cycles: ICycle[];
  amountSecondsPassed: number;
  activeCycleId: string | null;
  activeCycle: ICycle | undefined;
  onSaveNewCycle: (data: INewCycleData) => void;
  onSetAmountSecondsPassed: (seconds: number) => void;
  onInterruptCycle: (key: "finishedDate" | "interruptedDate") => void;
}

const CyclesContext = createContext({} as ICyclesContext);

function CyclesContextProvider({
  children,
}: Readonly<ICyclesContextProviderProps>) {
  const [cycles, setCycles] = useState<ICycle[]>([]);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);

  const activeCycle = useMemo(
    () => cycles.find((cycle) => cycle.id === activeCycleId),
    [cycles, activeCycleId]
  );

  const onInterruptCycle = useCallback(
    (key: keyof ICycle) => {
      setCycles((state) =>
        state.map((cycle) => {
          if (cycle.id === activeCycleId)
            return { ...cycle, [key]: new Date() };
          else return cycle;
        })
      );

      setActiveCycleId(null);
    },
    [activeCycleId]
  );

  const onSaveNewCycle = useCallback((data: INewCycleData) => {
    const newCycleId = String(new Date().getTime());
    const newCycle: ICycle = { ...data, startDate: new Date(), id: newCycleId };

    setAmountSecondsPassed(0);
    setActiveCycleId(newCycleId);
    setCycles((state) => [...state, newCycle]);
  }, []);

  const onSetAmountSecondsPassed = useCallback(
    (seconds: number) => setAmountSecondsPassed(seconds),
    [setAmountSecondsPassed]
  );

  const contextValue = useMemo(
    () => ({
      cycles,
      activeCycle,
      onSaveNewCycle,
      onInterruptCycle,
      activeCycleId: null,
      amountSecondsPassed,
      onSetAmountSecondsPassed,
    }),
    [
      cycles,
      activeCycle,
      onSaveNewCycle,
      onInterruptCycle,
      amountSecondsPassed,
      onSetAmountSecondsPassed,
    ]
  );

  return (
    <CyclesContext.Provider value={contextValue}>
      {children}
    </CyclesContext.Provider>
  );
}

function useCyclesContext() {
  const context = useContext(CyclesContext);

  if (context) return context;

  throw new Error(
    "Invalid useCyclesContext usage! It should be nested into CyclesContextProvider."
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export { useCyclesContext, CyclesContextProvider };
