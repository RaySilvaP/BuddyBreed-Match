import User from "../entities/user"; 
import bcrypt from 'bcrypt';

export class RegisterUserCaseUse {
    async execute({ userName, email, password }: { userName: string; email: string; password: string }) {
        try {
            const user = new User();
            user.userName = userName;        
            user.email = email;
            user.password = await bcrypt.hash(password, 10);
            await user.save();

            return user;
        } catch (error) {
            console.error("Erro ao cadastrar usuário:", error);
            throw new Error("Falha ao registrar usuário. Por favor, tente novamente mais tarde.");
        }           
    };
}

