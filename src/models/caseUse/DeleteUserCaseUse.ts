import User from "../entities/user";

export class DeleteUserCaseUse {    
    async execute(id: string): Promise<void> {
        const user = await User.findById(id);
        if (!user) {
            throw new Error('Usuário não encontrado no sistema!');
        };
        try {
            await user.deleteOne();
        } catch (error) {
            throw new Error('Erro ao deletar usuário!');            
        };     
    };
};
