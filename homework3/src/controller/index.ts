import {Request, Response, NextFunction} from 'express';

import { UserInterface } from '../models/user';
import { schema } from '../models/schema';

import {
    findUsers,
    getByLogin,
    updateUserByLogin,
    createUserHandler,
    deleteUserById,
    getLimitUser,
    getById,
} from '../services';

export const getUsers = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
         const usersData = await findUsers();
         res.send({usersData});
    } catch (error: any) {
        return next(error.message);
    }
};

export const getUserById = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const { params } = req;
        const user = await getById(params.id);
        if (!user) {
            return next('User not found');
        }
        return res.json({data: user});
    } catch (error: any) {
        return next(error.message);
    }
};

export const createUser = async (
    req: Request<{}, {}, UserInterface>,
    res: Response,
    next: NextFunction,
) => {
    try {
        await schema.validateAsync(req.body);
        const user = await getByLogin(req.body.login);
        if (user.length !== 0) {
            return next('Invalid login');
        }
        await createUserHandler(req.body);

        return res.send('Success');
    } catch (error: any) {
        return next(error.message);
    }
};

export const editUser = async (
    req: Request<{id: string}, {}, Omit<UserInterface, 'id'>>,
    res: Response,
    next: NextFunction,
) => {
    try {
        await schema.validateAsync(req.body);
        const id = req.params.id;
        const user = await updateUserByLogin({...req.body, id});
        if (user[0] === 0) {
            return next('Invalid login');
        }
        return res.send('Success');
    } catch (error: any) {
        return next(error.message);
    }
};

export const deleteUser = async (
    req: Request<{id: string}, {}, {}>,
    res: Response,
    next: NextFunction,
) => {
    const user = await deleteUserById(req.params.id);
    if (!user) {
        return next('Invalid id');
    }
    return res.send('Success');
};

export const getLimitedUser = async (
    req: Request<{}, {}, {}, {loginSubstring: string; limit: string}>,
    res: Response,
    next: NextFunction,
) => {
    try {
        const { loginSubstring, limit } = req.query;
        const userList = await getLimitUser(loginSubstring, limit);
        res.send(userList);
    } catch (error: any) {
        return next(error.message);
    }
};