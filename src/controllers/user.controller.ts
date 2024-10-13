import { Request, Response } from "express";
import { authenticateUser, createUser } from "../services/user.service";
import { InvalidCredentialsError, NotFoundError } from "../utils/errors";

export const registerUser = async (req: Request, res: Response) => {
    try {
        const newUser = await createUser(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const loginUser = async (req: Request, res: Response) => {
    try {
        const {email, password} = req.body;
        const {token, user} = await authenticateUser(email, password)
        res.status(202).json({token, user})
    } catch (error) {
        if(error instanceof NotFoundError){
            res.status(404).json({message: error.message});
        }
        else if(error instanceof InvalidCredentialsError){
            res.status(401).json({message: error.message});
        }
        else{
            res.status(500).send("Server error");
        }
    }
}