import User from "../entities/user"; 
import bcrypt from 'bcrypt';

export class RegisterUserCaseUse {
    async execute(userName: string, email: string, password: string, location: object) {
        try {
            const user = new User({
                userName,
                email,
                role: 'user',
                password: await bcrypt.hash(password, 10),
                location
            });
            await user.save();

            return user;
        } catch (error) {
            console.error("Erro ao cadastrar usuário:", error);
            throw new Error("Falha ao registrar usuário. Por favor, tente novamente mais tarde.");
        }           
    };
}

