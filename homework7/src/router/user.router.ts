import { Router } from 'express';

import {
    getUsers,
    getUserById,
    getLimitedUser,
    editUser,
    createUser,
    deleteUser,
} from '../controller/user.controller';
import logMiddleware from "../middleware/middleware";

const userRouter = Router();

userRouter.get('/users', logMiddleware, getUsers);

userRouter.get('/users/:id', logMiddleware, getUserById);

userRouter.post('/users', logMiddleware, createUser);

userRouter.put('/users/:id', logMiddleware, editUser);

userRouter.delete('/users', logMiddleware, deleteUser);

userRouter.get('/users', logMiddleware, getLimitedUser);

export default userRouter;