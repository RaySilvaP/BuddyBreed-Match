import bcrypt from "bcrypt"; 
import User from "../entities/user";
import { generateToken } from "../../service/jwtService";

export default class LoginCaseUse{
    async execute(email: string, password: string){
        const user = await User.findOne({ email });
        if (!user) {
            throw("E-mail ou senha incorreta.");
        };
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw("E-mail ou senha incorreta.");
        };
        const token = generateToken(user.id, user.role);
        return {
            token,
            user: {
                email: user.email,
                role: user.role,
            },
        };
    }
}