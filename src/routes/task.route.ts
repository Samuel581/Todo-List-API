import { Router } from "express";
import { verifyToken } from "../middlewares/auth.middleware";
import { createTaskController, getTasksController } from "../controllers/task.controller";

const taskRouter = Router()

taskRouter.post("/", verifyToken, createTaskController);
taskRouter.get("/", verifyToken, getTasksController);

export default taskRouter;