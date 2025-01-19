import * as S from "./styles";

import { useEffect } from "react";
import { differenceInSeconds } from "date-fns";

import { useCyclesContext } from "src/context/useCyclesContext";

export function CountDown() {
  const {
    activeCycle,
    onInterruptCycle,
    amountSecondsPassed,
    onSetAmountSecondsPassed,
  } = useCyclesContext();

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const secondsAmount = currentSeconds % 60;
  const minutesAmount = Math.floor(currentSeconds / 60);

  const minutes = String(minutesAmount).padStart(2, "0");
  const seconds = String(secondsAmount).padStart(2, "0");

  useEffect(() => {
    if (activeCycle) document.title = `${minutes}:${seconds}`;
    else document.title = "Ignite Timer";
  }, [minutes, seconds, activeCycle]);

  useEffect(() => {
    if (!activeCycle) return;

    const interval = setInterval(() => {
      const secondsDifference = differenceInSeconds(
        new Date(),
        new Date(activeCycle.startDate)
      );

      if (secondsDifference >= totalSeconds) {
        clearInterval(interval);
        onInterruptCycle("finishedDate");
        onSetAmountSecondsPassed(totalSeconds);
      } else onSetAmountSecondsPassed(secondsDifference);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [activeCycle, totalSeconds, onInterruptCycle, onSetAmountSecondsPassed]);

  return (
    <S.CountDownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <S.Separator>:</S.Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </S.CountDownContainer>
  );
}
