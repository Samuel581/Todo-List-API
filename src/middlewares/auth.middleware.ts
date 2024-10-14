import jwt from "jsonwebtoken"
import { Request, Response, NextFunction } from "express"
import { CustomRequest } from "../types/express"

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header("Authorization")?.split(" ")[1];
    if(!token)  {
        res.status(498).json({message: "No token provided"});
        return;
    }

    try{
        const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`) as {userId: string};
        req.body.userId = decoded.userId;
        next();
    }
    catch(error){
        res.status(498).json({message: "Invalid token"});
    }
}