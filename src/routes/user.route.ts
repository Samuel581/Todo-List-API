import { Router } from "express";
import { loginUser, registerUser } from "../controllers/user.controller";
import { validateRequest } from "../middlewares/valdiate.middleware";
import { createUserDTO } from "../dtos/user.dto";

const userRouter = Router();

/**
 * @swagger
 * /user/register:
 *  post: 
 *      summary: Create or register an user
 *      tags: [User]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/User'
 *      responses: 
 *          201: 
 *              description: User created
 *          500:
 *              description: Server error
 */
userRouter.post("/register", validateRequest(createUserDTO),registerUser);

/**
 * @swagger
 * /user/login:
 *  post: 
 *      summary: Create or register an user
 *      tags: [User]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/UserLogin'
 *      responses: 
 *          201: 
 *              description: Token
 *          500:
 *              description: Server error
 */
userRouter.post("/login", loginUser);

export default userRouter;