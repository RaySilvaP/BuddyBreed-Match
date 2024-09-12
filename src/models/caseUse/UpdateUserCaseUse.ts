import User from "../entities/user";
import bcrypt from 'bcrypt';
import { Types } from "mongoose";
interface Address{
    city: string; 
    state: string; 
    latitude: number;
    longitude: number;
};
interface UpdateUser{
    name?: string;
    userName?:string;
    email?:string;
    password?:string;
    address?: Address;
    updatedAt?: Date;
    cpf?: string;
    phone?: string;
};
export class UpdateUserCaseUse{
    async execute(id:string,updateData:UpdateUser){
        const userId = new Types.ObjectId(id);
        const user = await User.findById(userId);
        if(!user){
            throw new Error('Usuário não encontrado');
        };
        for(const [key, value] of Object.entries(updateData)){
            switch(key){
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
            };
        };
        user.updatedAt = new Date();
        await user.save();
        const dadosUser = {
            name:user.name,
            userName:user.userName,
            email:user.email,
        };
        return dadosUser;
    };                    
};