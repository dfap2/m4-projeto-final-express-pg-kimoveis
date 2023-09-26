import { Request, Response } from "express";
import { UserRead, UserReturn } from "../interfaces";
import { userServices } from "../services";
import { AppError } from "../errors";

const create = async (req: Request, res: Response): Promise<Response> => {
    const user: UserReturn = await userServices.create(req.body);
    return res.status(201).json(user);
};

const read = async (req: Request, res: Response): Promise<Response> => {
    const users: UserRead = await userServices.read();

    return res.status(200).json(users);
};

const update = async (req: Request, res: Response): Promise<Response> => {
    if (!res.locals.decoded.admin) {
        const id: number = Number(req.params.id);
        const tokenId: number = Number(res.locals.decoded.sub);

        if (id !== tokenId) throw new AppError("Insufficient permission", 403);
    }
    const payload = req.body;

    const updatedUser: UserReturn = await userServices.update(
        payload,
        res.locals.foundUser
    );

    return res.status(200).json(updatedUser);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
    await userServices.destroy(res.locals.foundUser);

    return res.status(204).json();
};

export default { create, read, update, destroy };
