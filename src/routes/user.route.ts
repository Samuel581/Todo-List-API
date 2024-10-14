import { Router } from "express";
import { loginUser, registerUser } from "../controllers/user.controller";
import { validateRequest } from "../middlewares/valdiate.middleware";
import { createUserDTO } from "../dtos/user.dto";

const userRouter = Router();

userRouter.post("/register", validateRequest(createUserDTO),registerUser);
userRouter.get("/login", loginUser);

export default userRouter;