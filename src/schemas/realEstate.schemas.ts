import { z } from "zod";
import { addressCreateSchema } from "./address.schemas";

const realEstateSchema = z.object({
    id: z.number().positive(),
    sold: z.boolean().default(false),
    value: z.number().or(z.string()).optional().default(0),
    size: z.number().positive(),
    createdAt: z.string().or(z.date()),
    updatedAt: z.string().or(z.date()),
});

const realEstateCreateSchema = realEstateSchema
    .omit({
        id: true,
        createdAt: true,
        updatedAt: true,
        schedules: true,
    })
    .extend({
        address: addressCreateSchema,
        categoryId: z.number().positive(),
    });

export { realEstateSchema, realEstateCreateSchema };
