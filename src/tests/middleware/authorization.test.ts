import httpmocks from 'node-mocks-http';
import { authorization } from '../../middleware';

test('Authorized user', () => {
    const req = httpmocks.createRequest();
    const res = httpmocks.createResponse({
        locals: {user: {username: 'test', role: 'admin'}}
    });
    const next = jest.fn();

    const middleware = authorization('admin');
    middleware(req, res, next);

    expect(next).toHaveBeenCalledWith();
});

test('Unauthorized user', () => {
    const req = httpmocks.createRequest();
    const res = httpmocks.createResponse({
        locals: {user: {username: 'test', role: 'user'}}
    });
    const next = jest.fn();

    const middleware = authorization('admin');
    middleware(req, res, next);

    expect(next).not.toHaveBeenCalled();
    expect(res.statusCode).toEqual(401);
});

test('Authorization hierarchy', () => {
    const req = httpmocks.createRequest();
    const res = httpmocks.createResponse({
        locals: {user: {username: 'test', role: 'admin'}}
    });
    const next = jest.fn();

    const middleware = authorization('user');
    middleware(req, res, next);

    expect(next).toHaveBeenCalledWith();
});