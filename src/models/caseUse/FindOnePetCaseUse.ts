import PetsModel from "../entities/pet";

export class FindOnePetCaseUse{
    async execute(id:string){
        const pet = await PetsModel.findById(id);
        return pet;
    };
};