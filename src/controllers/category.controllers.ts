import { Request, Response } from "express";
import { Category } from "../entities";
import { categoryServices } from "../services";
import { CategoryRead, CategoryRetrieve } from "../interfaces";
import { AppError } from "../errors";
import { categoryRepository } from "../repositories";

const create = async (req: Request, res: Response): Promise<Response> => {
    const category: Category = await categoryServices.create(req.body);

    return res.status(201).json(category);
};

const read = async (req: Request, res: Response): Promise<Response> => {
    const categories: CategoryRead = await categoryServices.read();

    return res.status(200).json(categories);
};

const retrieve = async (req: Request, res: Response): Promise<Response> => {
    const id: number = Number(req.params.id);

    const foundCategory: Category | null = await categoryRepository.findOneBy({
        id,
    });
    if (!foundCategory) throw new AppError("Category not found", 404);

    const realEstates: CategoryRetrieve = await categoryServices.retrieve(
        id,
        foundCategory
    );

    return res.status(200).json(realEstates);
};

export default { create, read, retrieve };
