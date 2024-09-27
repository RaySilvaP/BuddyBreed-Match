import { Types } from "mongoose";
import { PetType } from "../entities/pets";
import User from "../entities/user";

export default class FindMyPetsCaseUse {
    async execute(id: string){
        try {
            const user = await User.findById(id).populate('pets');
            if(!user)
                throw("Usuário não encontrado")

            if(!user.pets)
                return [];

            return user.pets;
        } catch (error) {
            console.error("Erro ao tentar buscar pets:", error);
            throw new Error("Falha ao tentar recuperar pets. Por favor, tente novamente mais tarde.");
        };
    };
};