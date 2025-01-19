import { ICycle } from "src/@types/cycle";

export enum ECycleActionType {
  ADD_NEW_CYCLE = "ADD_NEW_CYCLE",
  INTERRUPT_CYCLE = "INTERRUPT_CYCLE",
}

export function addNewCycleAction(newCycle: ICycle) {
  return {
    payload: { newCycle },
    type: ECycleActionType.ADD_NEW_CYCLE,
  };
}

export function interruptCycleAction(interruptCycleKey: keyof ICycle) {
  return {
    payload: { interruptCycleKey },
    type: ECycleActionType.INTERRUPT_CYCLE,
  };
}

type AddNewCycleAction = ReturnType<typeof addNewCycleAction>;
type InterruptCycleAction = ReturnType<typeof interruptCycleAction>;
export type TCycleAction = AddNewCycleAction | InterruptCycleAction;
