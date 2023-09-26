import { Category } from "../entities";
import {
    CategoryCreate,
    CategoryRead,
    CategoryRetrieve,
    RealEstateRead,
} from "../interfaces";
import { categoryRepository, realEstateRepository } from "../repositories";

const create = async (payload: CategoryCreate): Promise<Category> => {
    const category: Category = categoryRepository.create(payload);
    await categoryRepository.save(category);

    return category;
};

const read = async (): Promise<CategoryRead> => {
    const categories: CategoryRead = await categoryRepository.find();

    return categories;
};

const retrieve = async (
    id: number,
    foundCategory: Category
): Promise<CategoryRetrieve> => {
    const realEstate: RealEstateRead = await realEstateRepository.findBy({
        category: { id },
    });

    const realEstateCategory: CategoryRetrieve = {
        ...foundCategory,
        realEstate,
    };

    return realEstateCategory;
};

export default { create, read, retrieve };
