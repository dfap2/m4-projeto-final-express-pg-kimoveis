import { NextFunction, Request, Response } from "express";
import { Category } from "../entities";
import { categoryRepository } from "../repositories";
import { AppError } from "../errors";

const uniqueCategoryName = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const { name } = req.body;
    const foundCategory: Category | null = await categoryRepository.findOneBy({
        name,
    });

    if (foundCategory) throw new AppError("Category already exists", 409);

    return next();
};

export default uniqueCategoryName;
