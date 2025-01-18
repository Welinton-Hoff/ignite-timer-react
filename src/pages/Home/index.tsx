import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  INewCycleFormData,
  newCycleFormSchema,
} from "./components/NewCycleForm/formValidators";

import { Button } from "./components/Button";
import { CountDown } from "./components/CountDown";
import { NewCycleForm } from "./components/NewCycleForm";
import { useCyclesContext } from "src/context/useCyclesContext";

import * as S from "./styles";

export function Home() {
  const { onSaveNewCycle, onInterruptCycle } = useCyclesContext();
  const { watch, reset, register, handleSubmit } = useForm<INewCycleFormData>({
    resolver: zodResolver(newCycleFormSchema),
    defaultValues: { task: "", minutesAmount: 0 },
  });

  const taskValue = watch("task");
  const minutesAmountValue = watch("minutesAmount");
  const isSubmitDisabled = !taskValue || !minutesAmountValue;

  function handleCreateNewCycle(data: INewCycleFormData) {
    reset();
    onSaveNewCycle(data);
  }

  return (
    <S.Container>
      <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <NewCycleForm register={register} />
        <CountDown />

        <Button
          isSubmitDisabled={isSubmitDisabled}
          onClick={() => onInterruptCycle("interruptedDate")}
        />
      </form>
    </S.Container>
  );
}
