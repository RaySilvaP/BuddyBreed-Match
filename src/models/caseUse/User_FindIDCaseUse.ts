import User from "../entities/user";

export class FindUserByIdCaseUse {
    async execute(userId: string) {
        try {
            const user = await User.findById(userId);
            if (!user) {
                throw new Error("Usuário não encontrado.");
            }
            return user;
        } catch (error) {
            console.error("Erro ao localizar usuário por ID:", error);
            throw new Error("Falha ao encontrar o usuário. Por favor, tente novamente mais tarde.");
        }
    }
}