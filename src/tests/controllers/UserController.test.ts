import httpmocks from 'node-mocks-http';
import DeleteUserController from '../../controllers/deleteUserController'
import DeleteUserCaseUse from '../../models/caseUser/DeleteUserCaseUse';
jest.mock('../../models/caseUser/DeleteUserCaseUse', () => {
    return {
      DeleteUserCaseUse: jest.fn().mockImplementation(() => {
        return {
          execute: () => {},
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
        params: {id: 1}
    });
    const res = httpmocks.createResponse({
        locals: {user: {id: 1}}
    });
    const deleteUser = new DeleteUserController();
    
    deleteUser.handle(req, res);

    expect(res.statusCode).toEqual(200);
});