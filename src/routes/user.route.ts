import { Router } from "express";
import { loginUser, registerUser } from "../controllers/user.controller";

const userRouter = Router();

userRouter.post("/register", registerUser);
userRouter.get("/login", loginUser);

export default userRouter;