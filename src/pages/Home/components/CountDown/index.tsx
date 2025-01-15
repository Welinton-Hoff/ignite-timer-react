import * as S from "./styles";

interface ICountDownProps {
  minutes: number;
  seconds: number;
}

export function CountDown(props: Readonly<ICountDownProps>) {
  const minutes = String(props.minutes).padStart(2, "0");
  const seconds = String(props.seconds).padStart(2, "0");

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
