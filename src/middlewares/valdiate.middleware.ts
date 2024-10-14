import { plainToInstance } from "class-transformer";
import { validate, ValidationError } from "class-validator";
import { Request, Response, NextFunction } from "express";

export const validateRequest = (dtoClass: any) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const dtoObject = plainToInstance(dtoClass, req.body);
        const errors = await validate(dtoObject);

        if(errors.length > 0) {
            const formattedErrors = errors.map((error: ValidationError) => ({
                property: error.property,
                constraints: error.constraints,
            }));
            res.status(400).json({ message: 'Validation failed', errors: formattedErrors });
            return;
        }
        next();
    }
}