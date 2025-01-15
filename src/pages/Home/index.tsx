import { useCallback, useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { differenceInSeconds } from "date-fns";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  INewCycleFormData,
  newCycleFormSchema,
} from "./components/NewCycleForm/formValidators";

import { Button } from "./components/Button";
import { CountDown } from "./components/CountDown";
import { NewCycleForm } from "./components/NewCycleForm";

import * as S from "./styles";

export interface ICycle extends INewCycleFormData {
  id: string;
  startDate: Date;
  finishedDate?: Date;
  interruptedDate?: Date;
}

export function Home() {
  const { watch, reset, register, handleSubmit } = useForm<INewCycleFormData>({
    resolver: zodResolver(newCycleFormSchema),
    defaultValues: { task: "", minutesAmount: 0 },
  });

  const [cycles, setCycles] = useState<ICycle[]>([]);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);

  const taskValue = watch("task");
  const minutesAmountValue = watch("minutesAmount");

  const isSubmitDisabled = !taskValue || !minutesAmountValue;
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const secondsAmount = currentSeconds % 60;
  const minutesAmount = Math.floor(currentSeconds / 60);

  const minutes = String(minutesAmount).padStart(2, "0");
  const seconds = String(secondsAmount).padStart(2, "0");

  const handleInterruptCycle = useCallback(
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

  function handleCreateNewCycle(data: INewCycleFormData) {
    const newCycleId = String(new Date().getTime());
    const newCycle: ICycle = { ...data, startDate: new Date(), id: newCycleId };

    reset();
    setAmountSecondsPassed(0);
    setActiveCycleId(newCycleId);
    setCycles((state) => [...state, newCycle]);
  }

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate
        );

        if (secondsDifference >= totalSeconds) {
          clearInterval(interval);
          handleInterruptCycle("finishedDate");
          setAmountSecondsPassed(totalSeconds);
        } else setAmountSecondsPassed(secondsDifference);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [activeCycle, handleInterruptCycle, totalSeconds]);

  useEffect(() => {
    if (activeCycle) document.title = `${minutes}:${seconds}`;
    else document.title = "Ignite Timer";
  }, [minutes, seconds, activeCycle]);

  return (
    <S.Container>
      <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <NewCycleForm activeCycle={!!activeCycleId} register={register} />
        <CountDown minutes={minutesAmount} seconds={secondsAmount} />

        <Button
          isCycleActive={!!activeCycle}
          isSubmitDisabled={isSubmitDisabled}
          onClick={() => handleInterruptCycle("interruptedDate")}
        />
      </form>
    </S.Container>
  );
}
