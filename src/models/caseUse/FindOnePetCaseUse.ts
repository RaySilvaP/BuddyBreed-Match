import PetsModel from "../entities/pets";

export class FindOnePetCaseUse{
    async execute(id:string){
        const pet = await PetsModel.findById(id);
        return pet;
    };
};