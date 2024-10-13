import { Router } from "express";
import { verifyToken } from "../middlewares/auth.middleware";
import { createTaskController } from "../controllers/task.controller";

const taskRouter = Router()

taskRouter.post("/", verifyToken, createTaskController);

export default taskRouter;