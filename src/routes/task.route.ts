import { Router } from "express";
import { verifyToken } from "../middlewares/auth.middleware";
import { createTaskController, getTasksController, getTaskByIdController, updatedTaskController, deleteTaskController } from "../controllers/task.controller";

const taskRouter = Router()

taskRouter.post("/", verifyToken, createTaskController);
taskRouter.get("/", verifyToken, getTasksController);
taskRouter.get("/:id", verifyToken, getTaskByIdController);
taskRouter.patch("/:id", verifyToken, updatedTaskController);
taskRouter.delete("/:id", verifyToken, deleteTaskController);

export default taskRouter;