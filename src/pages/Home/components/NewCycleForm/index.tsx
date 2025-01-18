import * as S from "./styles";

import { UseFormRegister } from "react-hook-form";

import { INewCycleFormData } from "./formValidators";
import { useCyclesContext } from "src/context/useCyclesContext";

interface INewCycleFormProps {
  register: UseFormRegister<INewCycleFormData>;
}

export function NewCycleForm({ register }: Readonly<INewCycleFormProps>) {
  const { activeCycle } = useCyclesContext();

  return (
    <S.FormContainer>
      <label htmlFor="task">I will work on</label>
      <S.TaskInput
        id="task"
        autoComplete="off"
        {...register("task")}
        list="task-suggestions"
        disabled={!!activeCycle}
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
        disabled={!!activeCycle}
        {...register("minutesAmount", { valueAsNumber: true })}
      />

      <span>minutes.</span>
    </S.FormContainer>
  );
}
