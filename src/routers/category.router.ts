import { Router } from "express";
import { categoryControllers } from "../controllers";
import validateBody from "../middlewares/validateBody.middleware";
import { categoryCreateSchema } from "../schemas";
import middlewares from "../middlewares";

const categoryRouter: Router = Router();

categoryRouter.post(
    "",
    middlewares.verifyToken,
    middlewares.isAdmin,
    validateBody(categoryCreateSchema),
    middlewares.uniqueCategoryName,
    categoryControllers.create
);
categoryRouter.get("", categoryControllers.read);
categoryRouter.get("/:id/realEstate", categoryControllers.retrieve);

export default categoryRouter;
