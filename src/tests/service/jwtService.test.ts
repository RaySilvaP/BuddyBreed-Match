import { JsonWebTokenError } from "jsonwebtoken";
import { generateToken, verifyToken } from "../../service/jwtService";

test('generate token', () => {
    let token;
    expect(() => {token = generateToken('test', 'admin')}).not.toThrow(JsonWebTokenError);
    expect(token).toBeDefined();
});

test('verify valid token', () => {
    const token = generateToken('test', 'admin');
    expect(() => {verifyToken(token)}).not.toThrow(JsonWebTokenError);
});

test('verify invalid token', () => {
    const token = 'dddadasdwqdwqwdqwmdqwmdq';
    expect(() => {verifyToken(token)}).toThrow(JsonWebTokenError);
});