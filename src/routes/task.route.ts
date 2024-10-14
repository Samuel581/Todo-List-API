import { Router } from "express";
import { verifyToken } from "../middlewares/auth.middleware";
import { createTaskController, getTasksController, getTaskByIdController, updatedTaskController, deleteTaskController } from "../controllers/task.controller";
import { validateRequest } from "../middlewares/valdiate.middleware";
import { createTaskDTO, updateTaskDTO } from "../dtos/task.dto";

const taskRouter = Router()

taskRouter.post("/", verifyToken, validateRequest(createTaskDTO), createTaskController);
taskRouter.get("/", verifyToken, getTasksController);
taskRouter.get("/:id", verifyToken, getTaskByIdController);
taskRouter.patch("/:id", verifyToken, validateRequest(updateTaskDTO), updatedTaskController);
taskRouter.delete("/:id", verifyToken, deleteTaskController);

export default taskRouter;