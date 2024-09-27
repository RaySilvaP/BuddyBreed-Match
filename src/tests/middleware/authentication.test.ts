import httpmocks from 'node-mocks-http';
import { authenticate } from '../../middleware';
import { generateToken } from '../../service/jwtService';

const res = httpmocks.createResponse();
const next = jest.fn();

test('valid token', () => {
    const token = generateToken('id', 'user');
    const req = httpmocks.createRequest({
        headers: {authorization: token}
    });

    authenticate(req, res, next);

    expect(next).toHaveBeenCalledWith();
    expect(res.locals.user.id).toEqual('id');
});

test('invalid token', () => {
    const token = 'adasdasdasdasdad';
    const req = httpmocks.createRequest({
        headers: {authorization: token}
    });

    authenticate(req, res, next);

    expect(next).not.toHaveBeenCalled();
    expect(res.statusCode).toEqual(403);
});