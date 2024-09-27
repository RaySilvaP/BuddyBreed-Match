import { join } from "path";
import User from "../entities/user";
import fs from 'fs/promises'

export default class ChangeProfilePictureCaseUse{
    async execute(id: string, fileName: string){
        const user = await User.findById(id);
        if(!user)
            throw('Usuário não encontrado.')

        
        if(user.profilePicture){
            const path = join(__dirname, '../../../uploads', user.profilePicture);
            await fs.rm(path);
        }
        
        user.profilePicture = fileName;
        await user.save();
    }
}