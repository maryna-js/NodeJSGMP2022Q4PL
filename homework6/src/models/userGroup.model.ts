import { Group } from './group.model';
import { User } from './user';

export type UserGroup = {
    UserIds: string[];
};

User.belongsToMany(Group, { through: 'UserGroup', onDelete: 'cascade' });
Group.belongsToMany(User, { through: 'UserGroup', onDelete: 'cascade' });