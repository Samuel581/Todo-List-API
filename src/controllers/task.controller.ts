import { Request, Response } from "express";
import { createTask } from "../services/task.service";
import { CustomRequest } from "../types/express";

export const createTaskController = async (req: CustomRequest, res: Response) => {
    try {
        const { tittle, description } = req.body;
        const userId = req.user?.userId;

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