import httpmocks from 'node-mocks-http';
import { authentication } from '../../middleware';
import { generateToken } from '../../service/jwtService';

test('valid token', () => {
    const token = generateToken('test', 'user');
    const req = httpmocks.createRequest({
        headers: {authorization: token}
    });
    const res = httpmocks.createResponse();
    const next = jest.fn();

    authentication(req, res, next);

    expect(next).toHaveBeenCalledWith();
    expect(res.locals.user.username).toEqual('test');
});

test('invalid token', () => {
    const token = 'adasdasdasdasdad';
    const req = httpmocks.createRequest({
        headers: {authorization: token}
    });
    const res = httpmocks.createResponse();
    const next = jest.fn();

    authentication(req, res, next);

    expect(next).not.toHaveBeenCalled();
    expect(res.statusCode).toEqual(403);
});