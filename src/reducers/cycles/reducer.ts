import { produce } from "immer";

import { ICycle } from "src/@types/cycle";
import { ECycleActionType, TCycleAction } from "./actions";

export interface ICycleState {
  cycles: ICycle[];
  activeCycleId: string | null;
}

export function cyclesReducer(state: ICycleState, action: TCycleAction) {
  switch (action.type) {
    case ECycleActionType.ADD_NEW_CYCLE: {
      const { newCycle } = action.payload as { newCycle: ICycle };

      return produce(state, (draft) => {
        draft.cycles.push(newCycle);
        draft.activeCycleId = newCycle.id;
      });
    }

    case ECycleActionType.INTERRUPT_CYCLE: {
      const { interruptCycleKey } = action.payload as {
        interruptCycleKey: keyof ICycle;
      };

      const currentCycleIndex = state.cycles.findIndex(
        (cycle) => cycle.id === state.activeCycleId
      );

      if (currentCycleIndex < 0) return state;

      return produce(state, (draft) => {
        draft.activeCycleId = null;
        (draft.cycles[currentCycleIndex][interruptCycleKey] as Date) =
          new Date();
      });
    }

    default:
      return state;
  }
}
