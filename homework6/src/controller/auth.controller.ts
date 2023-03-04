import { Request, Response, NextFunction } from 'express';
import { generateToken } from '../utils/token.util';

import { getByLogin } from '../services/user.service';

export const loginHandler = async (
    req: Request<{}, {}, { login: string; password: string }>,
    res: Response,
    next: NextFunction,
) => {
    try {
        const user: any = await getByLogin(req.body.login);
        if (!user || req.body.password !== user.password) {
            return next(new Error('User does not exist'));
        }
        return res.status(200).json({
            token: generateToken(req.body.login),
        });
    } catch (error) {
        return next(new Error('Something went wrong'));
    }
};