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

const groupRouter = Router();

groupRouter.get('/groups', logMiddleware, getGroups);

groupRouter.get('/groups/:id', logMiddleware, getGroupById);

groupRouter.post('/groups', logMiddleware, createGroup);

groupRouter.put('/groups/:id', logMiddleware, updateGroup);

groupRouter.delete('/groups', logMiddleware, deleteGroup);

groupRouter.post('/groups/:id/user', addUsersToGroup);

export default groupRouter;