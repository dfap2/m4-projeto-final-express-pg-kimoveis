import { z } from "zod";
import { userCreateSchema, userReadSchema, userReturnSchema } from "../schemas";
import { DeepPartial } from "typeorm";
import { User } from "../entities";

type UserCreate = z.infer<typeof userCreateSchema>;
type UserReturn = z.infer<typeof userReturnSchema>;
type UserRead = z.infer<typeof userReadSchema>;
type UserUpdate = DeepPartial<User>;

export { UserCreate, UserReturn, UserRead, UserUpdate };
