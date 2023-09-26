import { z } from "zod";
import { scheduleCreateSchema, scheduleReturnSchema } from "../schemas";

type ScheduleCreate = z.infer<typeof scheduleCreateSchema>;
type ScheduleReturn = z.infer<typeof scheduleReturnSchema>;

export { ScheduleCreate, ScheduleReturn };
