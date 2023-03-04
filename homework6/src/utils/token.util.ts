import * as jwt from 'jsonwebtoken';
import { ErrorToken } from './error.util';

export const generateToken = (login: string) =>
    jwt.sign({ login }, 'TOKEN', {
        expiresIn: '10m',
    });

export const decodeToken = (token: string) => {
    try {
        return jwt.verify(token, 'TOKEN');
    } catch (err) {
        throw new ErrorToken();
    }
};