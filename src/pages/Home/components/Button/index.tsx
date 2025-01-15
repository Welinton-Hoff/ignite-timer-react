import { HandPalm, Play } from "phosphor-react";
import * as S from "./styles";

interface IButtonProps {
  onClick: () => void;
  isCycleActive: boolean;
  isSubmitDisabled: boolean;
}

export function Button(props: Readonly<IButtonProps>) {
  const { onClick, isCycleActive, isSubmitDisabled } = props;

  return isCycleActive ? (
    <S.StopCountDownButton type="button" onClick={onClick}>
      <HandPalm size={24} /> Interrupt
    </S.StopCountDownButton>
  ) : (
    <S.StartCountDownButton type="submit" disabled={isSubmitDisabled}>
      <Play size={24} /> Start
    </S.StartCountDownButton>
  );
}
