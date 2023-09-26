import {
    userSchema,
    userCreateSchema,
    userReturnSchema,
    userReadSchema,
    userUpdateSchema,
    userRetrieveSchema,
} from "./user.schemas";
import { sessionCreate } from "./session.schema";
import { categorySchema, categoryCreateSchema } from "./category.schemas";
import {
    scheduleSchema,
    scheduleCreateSchema,
    scheduleReturnSchema,
} from "./schedule.schemas";
import { realEstateSchema, realEstateCreateSchema } from "./realEstate.schemas";
import { addressSchema, addressCreateSchema } from "./address.schemas";

export {
    userSchema,
    userCreateSchema,
    userReturnSchema,
    userReadSchema,
    userUpdateSchema,
    sessionCreate,
    categorySchema,
    categoryCreateSchema,
    scheduleSchema,
    scheduleCreateSchema,
    scheduleReturnSchema,
    realEstateSchema,
    realEstateCreateSchema,
    addressSchema,
    addressCreateSchema,
    userRetrieveSchema,
};
