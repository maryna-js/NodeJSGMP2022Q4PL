import {
    getUsersReq,
    getUserByIdReq,
    createUserReq,
    updateUserReq,
    deleteUserReq
} from '../../requests';

test('Get users', async () => {
    const res = await getUsersReq();
    expect(res.data.usersData).toHaveLength;
});

test('Get user by id', async () => {
    const res = await getUserByIdReq('11');
    expect(res.data.data[0].login).toEqual('test@gmail.com');
});

test('Create user', async () => {
    const res = await createUserReq({
        login: 'test@gmail.com',
        password: 'password',
        age: 18,
        isDeleted: false,
    });
    expect(res.status).toEqual(500);
});

test('Update user', async () => {
    const res = await updateUserReq({
        id: '11',
        login: 'test@gmail.com',
        password: 'password',
        age: 19,
        isDeleted: false,
    });
    expect(res.data).toEqual('Success');
});

test('Delete user', async () => {
    const res = await deleteUserReq('11');
    expect(res.data).toEqual('Success');
});