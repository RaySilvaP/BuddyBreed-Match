import httpmocks from 'node-mocks-http'
import { uploadErrorHandler } from '../../middleware'
import { MulterError } from 'multer';

describe('Upload error handler', () => {
    const req = httpmocks.createRequest();
    const res = httpmocks.createResponse();
    const next = jest.fn();
    
    test('Upload error', () => {
        const err = new MulterError('LIMIT_UNEXPECTED_FILE');
    
        uploadErrorHandler(err, req, res, next);
    
        expect(next).not.toHaveBeenCalled();
        expect(res.statusCode).toEqual(400);
    });
    
    test('No upload error', () => {
        const err = new Error('Generic error');
    
        uploadErrorHandler(err, req, res, next);
    
        expect(next).toHaveBeenCalledWith(err);
    })
})