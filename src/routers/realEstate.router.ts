import { Router } from "express";
import { realEstateControllers } from "../controllers";
import validateBody from "../middlewares/validateBody.middleware";
import { realEstateCreateSchema } from "../schemas";
import middlewares from "../middlewares";

const realEstateRouter: Router = Router();

realEstateRouter.post(
    "",
    middlewares.verifyToken,
    middlewares.isAdmin,
    validateBody(realEstateCreateSchema),
    realEstateControllers.create
);

realEstateRouter.get("", realEstateControllers.read);

export default realEstateRouter;
