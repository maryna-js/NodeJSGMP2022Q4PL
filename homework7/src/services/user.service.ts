import { User, UserInterface } from '../models/user';

import { Op } from 'sequelize';

export const findUsers = async () => {
    try {
        return await User.findAll();
    } catch (error) {
        throw new Error();
    }
};

export const getById = async (id: string) => {
    try {
        const user = await User.findAll({
            where: {
                id: id,
            },
        });
        return user;
    } catch (error) {
        throw new Error();
    }
};

export const createUserHandler = async (userData: any) => {
    try {
        const user = await User.create(userData);
        return user;
    } catch (error) {
        throw new Error();
    }
};

export const getByLogin = async (login: string) => {
    try {
        const user = await User.findAll({
            where: {
                login: login,
            },
        });
        return user;
    } catch (error) {
        throw new Error();
    }
};

export const updateUserByLogin = async (userData: UserInterface) => {
    try {
        const user = await User.update(
            {...userData},
            {
                where: {
                    login: userData.login,
                },
            },
        );
        return user;
    } catch (error) {
        throw new Error();
    }
};

export const deleteUserById = async (id: string) => {
    try {
        const user = await User.update(
            { isDeleted: true },
            {
                where: {
                    id: id,
                },
            },
        );
        return user;
    } catch (error) {
        throw new Error();
    }
};

export const getLimitUser = async (loginSubstring: string, limit: string) => {
    try {
        const users = await User.findAll({
            where: {
                login: {
                    [Op.like]: `%${loginSubstring}%`,
                },
            },
            limit: parseInt(limit),
        });
        return users;
    } catch (error) {
        throw new Error();
    }
};