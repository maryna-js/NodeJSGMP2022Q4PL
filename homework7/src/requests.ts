import axios from 'axios';
import { UserInterface } from './models/user';
import { GroupInterface } from './models/group.model';

export const getUsersReq = () => {
    return axios.get('http://localhost:3000/users');
};

export const getUserByIdReq = (id: string) => {
    return axios.get(`http://localhost:3000/users/${id}`);
};

export const deleteUserReq = (id: string) => {
    return axios.delete(`http://localhost:3000/users/${id}`);
};

export const createUserReq = (user: Omit<UserInterface, 'id'>) => {
    return axios.post(`http://localhost:3000/users`, user);
};

export const updateUserReq = (user: UserInterface) => {
    return axios.put(`http://localhost:3000/users/${user.id}`, {
        login: user.login,
        password: user.password,
        age: user.age,
        isDeleted: user.isDeleted,
    });
};

export const getGroupsReq = () => {
    return axios.get('http://localhost:3000/groups');
};

export const getGroupByIdReq = (id: string) => {
    return axios.get(`http://localhost:3000/groups/${id}`);
};

export const createGroupReq = (group: Omit<GroupInterface, 'id'>) => {
    return axios.post(`http://localhost:3000/groups`, group);
};

export const updateGroupReq = (group: GroupInterface) => {
    return axios.put(`http://localhost:3000/groups/${group.id}`, {
        name: group.name,
        permissions: group.permissions,
    });
};

export const deleteGroupReq = (id: string) => {
    return axios.delete(`http://localhost:3000/groups/${id}`);
};