import { INewCycleFormData } from "src/pages/Home/components/NewCycleForm/formValidators";

export interface ICycle extends INewCycleFormData {
  id: string;
  startDate: Date;
  finishedDate?: Date;
  interruptedDate?: Date;
}
