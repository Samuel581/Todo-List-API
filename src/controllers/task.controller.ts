import { Request, Response } from "express";
import { createTask, getTasks } from "../services/task.service";
import { CustomRequest } from "../types/express";

export const createTaskController = async (req: Request, res: Response) => {
    try {
        console.log(req.body);
        const { tittle, description, userId} = req.body;

        if (!userId) {
            res.status(401).json({ message: "Unauthorized" });
            return;
        }

        const newTask = await createTask({userId, tittle, description});
        res.status(200).json(newTask);
    } catch (error) {
        res.status(500).json({error});
    }
}

export const getTasksController = async (req: CustomRequest, res: Response) => {
    try {
        const { userId } = req.body;
        console.log(userId);
        if (!userId) {
            res.status(401).json({ message: "Unauthorized" });
            return;
        }
        const tasks = await getTasks(userId);
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({error});
    }
}