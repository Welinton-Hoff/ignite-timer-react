import { useCyclesContext } from "src/context/useCyclesContext";
import * as S from "./styles";
import { formatDistanceToNow } from "date-fns";
import { CycleStatus } from "./components/CycleStatus";

export function History() {
  const { cycles } = useCyclesContext();

  return (
    <S.HistoryContainer>
      <h1>My history</h1>

      <S.HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Start</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {cycles.map((cycle) => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>{cycle.minutesAmount}</td>
                <td>
                  {formatDistanceToNow(cycle.startDate, { addSuffix: true })}
                </td>
                <td>
                  <CycleStatus {...cycle} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </S.HistoryList>
    </S.HistoryContainer>
  );
}
