import * as S from "./styles";

import { UseFormRegister } from "react-hook-form";

import { INewCycleFormData } from "./formValidators";
import { useCyclesContext } from "src/context/useCyclesContext";
import { useMemo } from "react";
import { storageKeys } from "src/constants/storage";
import { ICycleState } from "src/reducers/cycles/reducer";

interface INewCycleFormProps {
  register: UseFormRegister<INewCycleFormData>;
}

export function NewCycleForm({ register }: Readonly<INewCycleFormProps>) {
  const { activeCycle } = useCyclesContext();

  const taskSuggestions = useMemo(() => {
    const storedStateAsJSON = localStorage.getItem(storageKeys.cyclesState);

    if (storedStateAsJSON) {
      const pastCycles: ICycleState = JSON.parse(storedStateAsJSON);
      return pastCycles.cycles.map(({ task }) => task);
    }

    return [];
  }, []);

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
        {!!taskSuggestions.length &&
          taskSuggestions.map((task) => <option key={task} value={task} />)}
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
