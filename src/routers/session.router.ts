import { Router } from "express";
import middlewares from "../middlewares";
import { sessionController } from "../controllers";
import { sessionCreate } from "../schemas";

const sessionRouter: Router = Router();

sessionRouter.post(
    "",
    middlewares.validateBody(sessionCreate),
    sessionController.create
);

export default sessionRouter;
