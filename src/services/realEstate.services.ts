import { Address, Category, RealEstate } from "../entities";
import { AppError } from "../errors";
import { RealEstateCreate, RealEstateRead } from "../interfaces";
import {
    addressRepository,
    categoryRepository,
    realEstateRepository,
} from "../repositories";

const create = async (payload: RealEstateCreate): Promise<RealEstate> => {
    const address: Address = addressRepository.create(payload.address!);
    await addressRepository.save(address);
    const id: number = payload.categoryId;
    const category: Category | null = await categoryRepository.findOneBy({
        id,
    });

    if (!category) throw new AppError("Invalid categoryId", 404);

    const realEstate: RealEstate = realEstateRepository.create({
        ...payload,
        address,
        category,
    });
    await realEstateRepository.save(realEstate);

    return realEstate;
};

const read = async (): Promise<RealEstateRead> => {
    const realEstates: RealEstateRead = await realEstateRepository.find({
        relations: {
            address: true,
        },
    });

    return realEstates;
};

export default { create, read };
