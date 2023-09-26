import { z } from "zod";
import { userReturnSchema, userSchema } from "./user.schemas";
import { realEstateSchema } from "./realEstate.schemas";

const scheduleSchema = z.object({
    id: z.number().positive(),
    date: z.string(),
    hour: z.string(),
    realEstate: realEstateSchema,
    user: userSchema,
});

const scheduleCreateSchema = scheduleSchema
    .omit({ id: true, realEstate: true, user: true })
    .extend({
        realEstateId: z.number().positive(),
    });

const scheduleReturnSchema = scheduleSchema.extend({
    user: userReturnSchema,
});

export { scheduleSchema, scheduleCreateSchema, scheduleReturnSchema };
