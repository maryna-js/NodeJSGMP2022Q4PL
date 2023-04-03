import { Model, DataTypes } from 'sequelize';
import sequelize from '../data-access/database';

type PERMISSION = 'READ' | 'WRITE' | 'DELETE' | 'SHARE' | 'UPLOAD_FILES';

export interface GroupInterface {
    id: string;
    name: string;
    permissions: PERMISSION[];
}

export class Group extends Model {}
Group.init(
    {
        name: DataTypes.STRING,
        permissions: DataTypes.ARRAY(DataTypes.STRING),
    },
    {sequelize, modelName: 'groups'},
);