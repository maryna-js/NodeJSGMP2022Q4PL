import { Router } from 'express';

import {
    getGroups,
    getGroupById,
    updateGroup,
    createGroup,
    deleteGroup,
    addUsersToGroup
} from '../controller/group.controller';

const groupRouter = Router();

groupRouter.get('/groups', getGroups);

groupRouter.get('/groups/:id', getGroupById);

groupRouter.post('/groups', createGroup);

groupRouter.put('/groups/:id', updateGroup);

groupRouter.delete('/groups', deleteGroup);

groupRouter.post('/groups/:id/user', addUsersToGroup);

export default groupRouter;