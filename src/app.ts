import "express-async-errors";
import express from "express";
import {
    categoryRouter,
    realEstateRouter,
    scheduleRouter,
    sessionRouter,
    userRouter,
} from "./routers";
import middlewares from "./middlewares";

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/login", sessionRouter);
app.use("/categories", categoryRouter);
app.use("/realEstate", realEstateRouter);
app.use("/schedules", scheduleRouter);

app.use(middlewares.handleError);

export default app;
