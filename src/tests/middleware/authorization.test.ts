import httpmocks from 'node-mocks-http';
import { authorize } from '../../middleware';
import User from '../../models/entities/user';

describe('Authorization role', () => {
    test('Authorized user', () => {
        const req = httpmocks.createRequest();
        const res = httpmocks.createResponse({
            locals: {user: {role: 'admin'}}
        });
        const next = jest.fn();
    
        authorize.admin(req, res, next);
    
        expect(next).toHaveBeenCalledWith();
    });
    
    test('Unauthorized user', () => {
        const req = httpmocks.createRequest();
        const res = httpmocks.createResponse({
            locals: {user: {role: 'user'}}
        });
        const next = jest.fn();
    
        authorize.admin(req, res, next);
    
        expect(next).not.toHaveBeenCalled();
        expect(res.statusCode).toEqual(401);
    });
})

describe('Authorization pet owner', () => {
    const user1 = {
        id: 1,
        pets: [{id: 1}]
    };
    const user2 = {
        id: 2,
        pets: [{id: 2}]
    };
    const mock = jest.spyOn(User, 'findById')
    mock.mockImplementation(() => Promise.resolve(user1));
    const res = httpmocks.createResponse({
        locals: {user: user1}
    });

    test('Not the pet owner', async () => {
        const req = httpmocks.createRequest({
            params: {id: user2.pets[0]}
        });
        const next = jest.fn();
        
        authorize.petOwner(req, res, next);

        expect(next).not.toHaveBeenCalled();
        expect(res.statusCode).toEqual(401);
    });

    test('The pet owner', async () => {
        const req = httpmocks.createRequest({
            params: {id: user1.pets[0]}
        });
        const next = jest.fn();
        
        authorize.petOwner(req, res, next);

        expect(next).toHaveBeenCalledWith();
    });

    mock.mockRestore();
});