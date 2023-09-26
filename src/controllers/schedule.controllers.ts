import { Request, Response } from "express";
import { ScheduleReturn } from "../interfaces";
import { scheduleServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
    const schedule: ScheduleReturn = await scheduleServices.create(
        req.body,
        res.locals.decoded.sub
    );

    return res.status(201).json(schedule);
};

const retrieve = (req: Request, res: Response) => {
    return res.status(200).json("");
};

export default { create, retrieve };
