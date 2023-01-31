import { Model, DataTypes } from 'sequelize';
import sequelize from '../data-access/database';

export class Group extends Model {}
Group.init(
    {
        name: DataTypes.STRING,
        permissions: DataTypes.ARRAY(DataTypes.STRING),
    },
    {sequelize, modelName: 'groups'},
);