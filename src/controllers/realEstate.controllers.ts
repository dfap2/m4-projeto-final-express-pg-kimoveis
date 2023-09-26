import { Request, Response } from "express";
import { Address, RealEstate } from "../entities";
import { realEstateServices } from "../services";
import { addressRepository } from "../repositories";
import { AppError } from "../errors";
import { AddressCreate, RealEstateRead } from "../interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
    const address: AddressCreate = req.body.address;
    if (address) {
        const { street } = req.body.address;
        const address: Address | null = await addressRepository.findOneBy({
            street,
        });

        if (address) throw new AppError("Address already exists", 409);
    }
    const realEstate: RealEstate = await realEstateServices.create(req.body);

    return res.status(201).json(realEstate);
};

const read = async (req: Request, res: Response): Promise<Response> => {
    const realEstates: RealEstateRead = await realEstateServices.read();

    return res.status(200).json(realEstates);
};

export default { create, read };
