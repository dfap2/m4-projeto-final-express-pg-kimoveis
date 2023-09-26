import { Router } from "express";
import { scheduleControllers } from "../controllers";
import middlewares from "../middlewares";
import { scheduleCreateSchema } from "../schemas";

const scheduleRouter: Router = Router();

scheduleRouter.post(
    "",
    middlewares.verifyToken,
    middlewares.validateBody(scheduleCreateSchema),
    scheduleControllers.create
);

scheduleRouter.get(
    "/realEstate/:id",
    middlewares.verifyToken,
    middlewares.isAdmin,
    scheduleControllers.retrieve
);

export default scheduleRouter;
