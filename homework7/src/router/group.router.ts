import { Router } from 'express';

import {
    getGroups,
    getGroupById,
    updateGroup,
    createGroup,
    deleteGroup,
    addUsersToGroup
} from '../controller/group.controller';
import logMiddleware from "../middleware/middleware"
import { verifyMiddleware } from '../middleware/token.middleware'

const groupRouter = Router();

groupRouter.get('/groups', logMiddleware, verifyMiddleware, getGroups);

groupRouter.get('/groups/:id', logMiddleware, verifyMiddleware, getGroupById);

groupRouter.post('/groups', logMiddleware, verifyMiddleware, createGroup);

groupRouter.put('/groups/:id', logMiddleware, verifyMiddleware, updateGroup);

groupRouter.delete('/groups', logMiddleware, verifyMiddleware, deleteGroup);

groupRouter.post('/groups/:id/user', verifyMiddleware, addUsersToGroup);

export default groupRouter;