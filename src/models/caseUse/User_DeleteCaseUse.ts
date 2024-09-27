import User from "../entities/user";
import PetsModel from "../entities/pets";
import { RelationsPet } from "../entities/relations";

export class DeleteUserCaseUse {    
    async execute(id: string): Promise<void> {
        const user = await User.findById(id);
        if (!user) {
            throw new Error('Usuário não encontrado no sistema!');
        };
        try {
            const userPets = user.pets; 
            if(userPets && userPets.length>0){
                for (const pet of userPets) {
                    const petInList = await PetsModel.findById(pet).exec();
                    if(petInList){                        
                        const listRelation = petInList.relations;        
                        if (listRelation && listRelation.length > 0) {
                            for (const relation of listRelation) {
                                const relationDocument = await RelationsPet.findById(relation).exec();                 
                                if (relationDocument) {
                                    await relationDocument.deleteOne();
                                };
                            };
                        };
                        await petInList.deleteOne();
                    };
                };
            };
            await user.deleteOne();
        } catch (error) {
            console.error("Erro ao deletar usuário:", error);
            throw new Error('Falha ao deletar o usuário. Por favor, tente novamente mais tarde.');            
        };     
    };
};
