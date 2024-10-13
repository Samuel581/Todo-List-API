import jwt from "jsonwebtoken"
import { Request, Response, NextFunction } from "express"

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header("Authorization")?.split(" ")[1];
    if(!token) return res.status(401).json({message: "Access denied"});

    try{
        const verified = jwt.verify(token, `${process.env.JWT_SECRET}`)
        req.body = verified;
        next();
    }
    catch(error){
        res.status(498).json({message: "Invalid token"});
    }
}