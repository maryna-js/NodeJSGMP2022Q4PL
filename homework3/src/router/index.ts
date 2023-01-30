import { Router } from 'express';

import {
    getUsers,
    getUserById,
    getLimitedUser,
    editUser,
    createUser,
    deleteUser,
} from '../controller';

const router = Router();

router.get('/users', getUsers);

router.get('/users/:id', getUserById);

router.post('/users', createUser);

router.put('/users/:id', editUser);

router.delete('/users', deleteUser);

router.get('/users', getLimitedUser);

export default router;