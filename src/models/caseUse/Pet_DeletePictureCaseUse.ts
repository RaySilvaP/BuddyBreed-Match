import { join } from "path";
import PetsModel from "../entities/pets";
import fs from 'fs/promises'

export default class DeletePictureCaseUse{
    async execute(id: string, fileName: string){
        const pet = await PetsModel.findById(id);
        if(!pet)
            throw('Pet não encontrado.')

        if(!pet.photos)
            throw('Pet não possui fotos.')

        const index = pet.photos.findIndex(p => p == fileName);
        if(index > -1){
            pet.photos.splice(index, 1);
            const path = join(__dirname, '../../../uploads', fileName);
            await pet.save();
            await fs.rm(path);
        }
        else
            throw('Foto não encontrada.')
    }
}