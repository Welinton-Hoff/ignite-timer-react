import * as S from "./styles";
import { HandPalm, Play } from "phosphor-react";
import { useCyclesContext } from "src/context/useCyclesContext";

interface IButtonProps {
  onClick: () => void;
  isSubmitDisabled: boolean;
}

export function Button({ onClick, isSubmitDisabled }: Readonly<IButtonProps>) {
  const { activeCycle } = useCyclesContext();

  return activeCycle ? (
    <S.StopCountDownButton type="button" onClick={onClick}>
      <HandPalm size={24} /> Interrupt
    </S.StopCountDownButton>
  ) : (
    <S.StartCountDownButton type="submit" disabled={isSubmitDisabled}>
      <Play size={24} /> Start
    </S.StartCountDownButton>
  );
}
