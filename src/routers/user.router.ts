import { Router } from "express";
import { userControllers } from "../controllers";
import validateBody from "../middlewares/validateBody.middleware";
import { userCreateSchema, userUpdateSchema } from "../schemas";
import middlewares from "../middlewares";

const userRouter: Router = Router();

userRouter.post(
    "",
    validateBody(userCreateSchema),
    middlewares.uniqueUserEmail,
    userControllers.create
);
userRouter.get(
    "",
    middlewares.verifyToken,
    middlewares.isAdmin,
    userControllers.read
);

userRouter.use("/:id", middlewares.userIdExists);

userRouter.patch(
    "/:id",
    middlewares.verifyToken,
    middlewares.validateBody(userUpdateSchema),
    userControllers.update
);
userRouter.delete(
    "/:id",
    middlewares.verifyToken,
    middlewares.isAdmin,
    userControllers.destroy
);

export default userRouter;
