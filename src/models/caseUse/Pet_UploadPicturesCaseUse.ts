import PetsModel from "../entities/pets";

export default class UploadPicturesCaseUse{
    async execute(id: string, filesNames: string[]){
        const pet = await PetsModel.findById(id);
        if(!pet)
            throw('Pet não foi encontrado')
        
        if(!pet.photos)
            pet.photos = [];

        filesNames.forEach(fileName => pet.photos?.push(fileName));
        await pet.save();
    }
}