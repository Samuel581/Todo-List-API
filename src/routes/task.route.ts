import { Router } from "express";
import { verifyToken } from "../middlewares/auth.middleware";
import { createTaskController, getTasksController, getTaskByIdController, updatedTaskController, deleteTaskController } from "../controllers/task.controller";
import { validateRequest } from "../middlewares/valdiate.middleware";
import { createTaskDTO, updateTaskDTO } from "../dtos/task.dto";

const taskRouter = Router()

/**
 * @swagger
 * /task:
 *  post: 
 *      summary: Create a new task
 *      tags: [Tasks]
 *      security:
 *          - bearerAuth: []
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Task'
 *      responses: 
 *          401:
 *              description: Unauthorized
 *          200: 
 *              description: Created task
 *          500:
 *              description: Server error
 */
taskRouter.post("/", verifyToken, validateRequest(createTaskDTO), createTaskController);

/**
 * @swagger
 * /task:
 *  get: 
 *      summary: Get all tasks
 *      tags: [Tasks]
 *      security:
 *          - bearerAuth: []
 *      responses: 
 *          401:
 *              description: Unauthorized
 *          200: 
 *              description: Created task
 *          500:
 *              description: Server error
 */
taskRouter.get("/", verifyToken, getTasksController);

/**
 * @swagger
 * /task/{id}:
 *  get: 
 *      summary: Get an specific
 *      tags: [Tasks]
 *      security:
 *        - bearerAuth: []
 *      parameters: 
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: string
 *          description: The id of the task
 *      responses: 
 *          401:
 *              description: Unauthorized
 *          200: 
 *              description: Created task
 *          500:
 *              description: Server error
 */
taskRouter.get("/:id", verifyToken, getTaskByIdController);

/**
 * @swagger
 * /task/{id}:
 *  patch: 
 *      summary: Update an specific field of a task or all the editable
 *      tags: [Tasks]
 *      security:
 *        - bearerAuth: []
 *      parameters: 
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: string
 *          description: The id of the task
 *      responses: 
 *          401:
 *              description: Unauthorized
 *          200: 
 *              description: Created task
 *          500:
 *              description: Server error
 */
taskRouter.patch("/:id", verifyToken, validateRequest(updateTaskDTO), updatedTaskController);

/**
 * @swagger
 * /task/{id}:
 *  delete: 
 *      summary: Delete an specific task
 *      tags: [Tasks]
 *      security:
 *        - bearerAuth: []
 *      parameters: 
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: string
 *          description: The id of the task
 *      responses: 
 *          401:
 *              description: Unauthorized
 *          200: 
 *              description: Created task
 *          500:
 *              description: Server error
 */
taskRouter.delete("/:id", verifyToken, deleteTaskController);

export default taskRouter;