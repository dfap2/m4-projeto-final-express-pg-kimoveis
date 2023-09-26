import { z } from "zod";
import { categoryCreateSchema } from "../schemas";
import { Category, RealEstate } from "../entities";

type CategoryCreate = z.infer<typeof categoryCreateSchema>;
type CategoryRead = Array<Category>;

interface CategoryRetrieve {
    id: number;
    name: string;
    realEstate: Array<RealEstate>;
}

export { CategoryCreate, CategoryRead, CategoryRetrieve };
