import User from "../entities/user";
import bcrypt from 'bcrypt';

interface Address {
    city: string; 
    state: string; 
    latitude: number;
    longitude: number;
}

interface UpdateUser {
    name?: string;
    userName?: string;
    email?: string;
    password?: string;
    address?: Address;
    updatedAt?: Date;
    cpf?: string;
    phone?: string;
}

export class UpdateUserCaseUse {
    async execute(id: string, updateData: UpdateUser) {
        try {
            const user = await User.findById(id);
            
            if (!user) {
                throw new Error('Usuário não encontrado');
            }

            for (const [key, value] of Object.entries(updateData)) {
                switch (key) {
                    case 'name':
                        user.name = value;
                        break;
                    case 'userName':
                        user.userName = value;
                        break;
                    case 'email':
                        user.email = value;
                        break;
                    case 'password':
                        user.password = bcrypt.hashSync(value, 10);
                        break;
                    case 'cpf':
                        user.cpf = value;
                        break;
                    case 'phone':
                        user.phone = value;
                        break;
                    case 'address':
                        user.address = value;
                        break;
                }
            }

            user.updatedAt = new Date();
            await user.save();

            const dadosUser = {
                name: user.name,
                userName: user.userName,
                email: user.email,
            };

            return dadosUser;

        } catch (error) {
            console.error("Erro ao atualizar usuário:", error);
            throw new Error("Falha ao atualizar o usuário. Por favor, tente novamente mais tarde.");
        }
    }                    
}
