import { z } from "zod";
import { realEstateCreateSchema } from "../schemas";
import { RealEstate } from "../entities";

type RealEstateCreate = z.infer<typeof realEstateCreateSchema>;
type RealEstateRead = Array<RealEstate>;

export { RealEstateCreate, RealEstateRead };
