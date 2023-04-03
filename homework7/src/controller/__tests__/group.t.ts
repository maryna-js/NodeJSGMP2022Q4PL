import { getGroupsReq, getGroupByIdReq, createGroupReq, updateGroupReq, deleteGroupReq } from '../../requests';

test('Get groups', async () => {
    const res = await getGroupsReq();
    expect(res.data.usersData).toHaveLength;
});

test('Get group by id', async () => {
    const res = await getGroupByIdReq('2');
    expect(res.data.data[0].name).toEqual('Group 2');
});

test('Create group', async () => {
    const res = await createGroupReq({
        name: 'GROUP 12',
        permissions: ['WRITE'],
    });
    expect(res.status).toEqual(500);
});

test('Update group', async () => {
    const res = await updateGroupReq({
        id: '12',
        name: 'GROUP 12',
        permissions: ['WRITE'],
    });

    expect(res.status).toEqual(500);
});

test('Delete group', async () => {
    const res = await deleteGroupReq('5');
    expect(res.data).toEqual('Success');
});