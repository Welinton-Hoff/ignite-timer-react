import { differenceInSeconds } from "date-fns";

import {
  useMemo,
  useState,
  ReactNode,
  useEffect,
  useContext,
  useReducer,
  useCallback,
  createContext,
} from "react";

import {
  addNewCycleAction,
  interruptCycleAction,
} from "src/reducers/cycles/actions";
import { ICycle } from "src/@types/cycle";
import { storageKeys } from "src/constants/storage";
import { cyclesReducer } from "src/reducers/cycles/reducer";

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
  onCreateNewCycle: (data: INewCycleData) => void;
  onSetAmountSecondsPassed: (seconds: number) => void;
  onInterruptCycle: (key: "finishedDate" | "interruptedDate") => void;
}

const CyclesContext = createContext({} as ICyclesContext);

function CyclesContextProvider({
  children,
}: Readonly<ICyclesContextProviderProps>) {
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    { cycles: [], activeCycleId: null },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(storageKeys.cyclesState);

      if (storedStateAsJSON) return JSON.parse(storedStateAsJSON);
      else return initialState;
    }
  );

  const { cycles, activeCycleId } = cyclesState ?? {};

  const activeCycle = useMemo(
    () => cycles?.find((cycle) => cycle.id === activeCycleId),
    [cycles, activeCycleId]
  );

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate));
    }

    return 0;
  });

  const onInterruptCycle = useCallback((interruptCycleKey: keyof ICycle) => {
    dispatch(interruptCycleAction(interruptCycleKey));
  }, []);

  const onCreateNewCycle = useCallback((data: INewCycleData) => {
    const newCycleId = String(new Date().getTime());
    const newCycle: ICycle = { ...data, startDate: new Date(), id: newCycleId };

    setAmountSecondsPassed(0);
    dispatch(addNewCycleAction(newCycle));
  }, []);

  const onSetAmountSecondsPassed = useCallback(
    (seconds: number) => setAmountSecondsPassed(seconds),
    [setAmountSecondsPassed]
  );

  const contextValue = useMemo(
    () => ({
      cycles,
      activeCycle,
      onCreateNewCycle,
      onInterruptCycle,
      activeCycleId: null,
      amountSecondsPassed,
      onSetAmountSecondsPassed,
    }),
    [
      cycles,
      activeCycle,
      onCreateNewCycle,
      onInterruptCycle,
      amountSecondsPassed,
      onSetAmountSecondsPassed,
    ]
  );

  useEffect(() => {
    if (!cyclesState) return;

    const stateJSON = JSON.stringify(cyclesState);
    localStorage.setItem(storageKeys.cyclesState, stateJSON);
  }, [cyclesState]);

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
