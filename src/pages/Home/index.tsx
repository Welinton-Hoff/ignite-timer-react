import { Play } from "phosphor-react";

import * as S from "./styles";

export function Home() {
  return (
    <S.Container>
      <form>
        <S.FormContainer>
          <label htmlFor="task">I will work on</label>
          <S.TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Give your project a name"
          />
          <datalist id="task-suggestions">
            <option value="Project 1" />
            <option value="Project 2" />
            <option value="Project 3" />
          </datalist>

          <label htmlFor="minutesAmount">during</label>
          <S.MinutesAmountInput
            min={5}
            step={5}
            max={60}
            type="number"
            placeholder="00"
            id="minutesAmount"
          />

          <span>minutes.</span>
        </S.FormContainer>

        <S.CountDownContainer>
          <span>0</span>
          <span>0</span>
          <S.Separator>:</S.Separator>
          <span>0</span>
          <span>0</span>
        </S.CountDownContainer>

        <S.StartCountDownButton type="submit">
          <Play size={24} /> Start
        </S.StartCountDownButton>
      </form>
    </S.Container>
  );
}
