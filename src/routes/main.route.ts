import {Router} from 'express';
import userRouter from './user.route';
import taskRouter from './task.route';

const mainRouter = Router();

mainRouter.use('/user', userRouter);
mainRouter.use('/task', taskRouter)

export default mainRouter;

