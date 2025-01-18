import * as S from "./styles";
import { ICycle } from "src/@types/cycle";

export function CycleStatus(props: Readonly<ICycle>) {
  const { finishedDate, interruptedDate } = props;

  if (finishedDate) return <S.Status statusColor="green">Completed</S.Status>;

  if (interruptedDate)
    return <S.Status statusColor="red">Interrupted</S.Status>;

  return <S.Status statusColor="yellow">Pending</S.Status>;
}
