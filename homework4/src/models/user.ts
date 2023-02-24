import { Model, DataTypes } from 'sequelize';

import sequelize from '../data-access/database';

export interface UserInterface {
    id: string;
    login: string;
    password: string;
    age: number;
    isDeleted: boolean;
}

export class User extends Model {}
User.init(
    {
        id: {
           type: DataTypes.UUID,
           defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        login: DataTypes.STRING,
        password: DataTypes.STRING,
        age: DataTypes.INTEGER,
        isDeleted: DataTypes.INTEGER,
    },
    {sequelize, tableName: 'user'},
);