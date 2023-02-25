import { Op } from 'sequelize';
import { Group } from '../models/group.model'
import { User } from '../models/user'
import { GroupInterface, Permissions } from '../models/schema';
import sequelize from '../data-access/database';

export const findGroups = async () => {
    try {
        return await Group.findAll();
    } catch (error) {
        throw new Error();
    }
};

export const getGroupDataById = async (id: string) => {
    try {
        const groupData = await Group.findAll({
            where: {
                id: id,
            },
        });
        return groupData;
    } catch (error) {
        throw new Error();
    }
};

export const createGroupHandler = async (group: { name: string, permissions: Permissions[] }) => {
    try {
        const { name, permissions } = group;
        const groupData = await Group.create({ name, permissions });
        return groupData;
    } catch (error) {
        throw new Error();
    }
};

export const updateGroupData = async (groupData: GroupInterface) => {
    try {
        const group = await Group.update(
            {...groupData},
            {
                where: {
                    id: groupData.id,
                },
            },
        );
        return group;
    } catch (error) {
        throw new Error();
    }
};

export const deleteGroupDataById = async (id: string) => {
    try {
        const group = await Group.destroy(

            {
                where: {
                    id: id,
                },
            },
        );
        return group;
    } catch (error) {
        throw new Error();
    }
};

export const addUsersToGroupHandler = async (usersIds: string[], id: string) => {
    try {
        return await sequelize.transaction(async (t) => {
            const users = await User.findAll(
                {
                    where:
                        { id: { [Op.in]: usersIds }
                        },
                    transaction: t
                }
            );
            const group = await Group.findByPk(id, { transaction: t });
            await Promise.allSettled(users.map((user) => (user as any).addGroup(group, { transaction: t })));
        });
    } catch (error) {
        throw new Error();
    }
};