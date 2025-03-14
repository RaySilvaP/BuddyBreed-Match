import httpmocks from 'node-mocks-http';
import { DeleteuserController } from '../../controllers/user_deleteController';
import { DeleteUserCaseUse } from '../../models/caseUse/User_DeleteCaseUse';
jest.mock('../../models/caseUser/DeleteUserCaseUse', () => {
    return {
        DeleteUserCaseUse: jest.fn().mockImplementation(() => {
            return {
                execute: () => { },
            };
        })
    };
});

const mockedDeleteUserCaseUse = jest.mocked(DeleteUserCaseUse);

beforeEach(() => {
    mockedDeleteUserCaseUse.mockClear();
});

test('Delete user', () => {
    const req = httpmocks.createRequest({
        params: { id: 1 }
    });
    const res = httpmocks.createResponse({
        locals: { user: { id: 1 } }
    });
    const deleteUser = new DeleteuserController();

    deleteUser.handle(req, res);

    expect(res.statusCode).toEqual(200);
});
