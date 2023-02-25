import { Router } from 'express';

import {
    getUsers,
    getUserById,
    getLimitedUser,
    editUser,
    createUser,
    deleteUser,
} from '../controller/user.controller';

const userRouter = Router();

userRouter.get('/users', getUsers);

userRouter.get('/users/:id', getUserById);

userRouter.post('/users', createUser);

userRouter.put('/users/:id', editUser);

userRouter.delete('/users', deleteUser);

userRouter.get('/users', getLimitedUser);

export default userRouter;