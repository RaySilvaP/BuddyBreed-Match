import PetsModel from "../entities/pets";

export default class UploadPicturesCaseUse {
    async execute(id: string, filesNames: string[]) {
        try {
            const pet = await PetsModel.findById(id);
            if (!pet) {
                throw new Error("Pet não foi encontrado.");
            }

            if (!pet.photos) {
                pet.photos = [];
            }

            pet.photos.push(...filesNames);
            await pet.save();
        } catch (error:any) {
            throw new Error(`Erro ao salvar imagens: ${error.message}`);
        }
    }
}
