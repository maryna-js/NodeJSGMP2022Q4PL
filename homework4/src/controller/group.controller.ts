import { Request, Response, NextFunction } from 'express';

import { GroupInterface } from "../models/schema";

import {
    createGroupHandler,
    deleteGroupDataById,
    findGroups,
    getGroupDataById,
    updateGroupData
} from '../services/group.service';

export const getGroups = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const groups = await findGroups();
        res.send(groups);
    } catch (error) {
        return next(error);
    }
};

export const getGroupById = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const { id } = req.params;
        const group = await getGroupDataById(id);
        return res.json(group);
    } catch (error) {
        return next(error);
    }
};

export const createGroup = async (
    req: Request<{}, {}, GroupInterface>,
    res: Response,
    next: NextFunction,
) => {
    try {
        const { name, permissions } = req.body;
        const group = await createGroupHandler({ name, permissions });
        res.status(201).json({ groupId: group.get('id'), message: 'Group created' });
    } catch (error) {
        return next(error);
    }
};

export const updateGroup = async (
    req: Request<{id: string}, {}, Omit<GroupInterface, 'id'>>,
    res: Response,
    next: NextFunction,
) => {
    try {
        const { name, permissions } = req.body;
        const id = req.params.id;
        const group = await updateGroupData({name, permissions, id});
        if (!group) {
            return next('Invalid group');
        }
        return res.send('Group updated');
    } catch (error) {
        return next(error);
    }
};

export const deleteGroup = async (
    req: Request<{id: string}, {}, {}>,
    res: Response,
    next: NextFunction,
) => {
    const id = req.params.id;
    const group = await deleteGroupDataById(id);
    if (!group) {
        return next('Invalid id');
    }
    return res.send('Group successfully deleted');
};

