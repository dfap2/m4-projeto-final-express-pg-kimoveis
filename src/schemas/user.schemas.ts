import { z } from "zod";
import { scheduleSchema } from "./schedule.schemas";

const userSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(45),
    email: z.string().max(45).email(),
    admin: z.boolean().default(false),
    password: z.string().max(120),
    createdAt: z.string().or(z.date()),
    updatedAt: z.string().or(z.date()),
    deletedAt: z.string().or(z.date()).nullable(),
});

const userCreateSchema = userSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    schedules: true,
});

const userReturnSchema = userSchema.omit({ password: true });
const userReadSchema = userReturnSchema.array();
const userRetrieveSchema = userReturnSchema.extend({
    schedules: scheduleSchema.array(),
});

const userUpdateSchema = userCreateSchema.omit({ admin: true }).partial();

export {
    userSchema,
    userCreateSchema,
    userReturnSchema,
    userReadSchema,
    userUpdateSchema,
    userRetrieveSchema,
};
