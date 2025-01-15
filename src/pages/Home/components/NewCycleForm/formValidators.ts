import * as zod from "zod";

export const newCycleFormSchema = zod.object({
  task: zod.string().min(1, "Enter the task"),
  minutesAmount: zod
    .number()
    .min(5, "The cycle needs to be at least 5 minutes.")
    .max(60, "The cycle must be a maximum of 60 minutes."),
});

export type INewCycleFormData = zod.infer<typeof newCycleFormSchema>;
