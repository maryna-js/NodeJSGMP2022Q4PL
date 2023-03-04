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
import {verifyMiddleware} from "../middleware/token.middleware";

const userRouter = Router();

userRouter.get('/users', logMiddleware, verifyMiddleware, getUsers);

userRouter.get('/users/:id', logMiddleware, verifyMiddleware, getUserById);

userRouter.post('/users', logMiddleware, verifyMiddleware, createUser);

userRouter.put('/users/:id', logMiddleware, verifyMiddleware, editUser);

userRouter.delete('/users', logMiddleware, verifyMiddleware, deleteUser);

userRouter.get('/users', logMiddleware, verifyMiddleware, getLimitedUser);

export default userRouter;