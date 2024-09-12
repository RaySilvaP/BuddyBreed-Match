import User from "../entities/user"; 
import bcrypt from 'bcrypt';

export class RegisterUserCaseUse {
    async execute({ userName, email, password }: { userName: string; email: string; password: string }) {
        const user = new User();
        user.userName = userName;        
        user.email = email;
        user.role = "user";
        user.password = await bcrypt.hash(password, 10);
        await user.save();
        return user;           
    };
};
