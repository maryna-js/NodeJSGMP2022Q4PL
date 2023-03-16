import { NextFunction, Request, Response } from 'express';
import { ErrorUnauthorize } from '../utils/error.util';
import { decodeToken } from '../utils/token.util';

export const verifyMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];

        if (token === undefined) {
            throw new ErrorUnauthorize();
        }

        const loginValue = decodeToken(token);

        next();
    } catch (error) {
        next(error);
    }
};