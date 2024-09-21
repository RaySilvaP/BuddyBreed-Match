import mongoose from 'mongoose';
import { RelationsPet } from '../entities/relations';

export class VerifyLikesPets {
    async execute(relationsSuitorPet: mongoose.Types.ObjectId[], idPetRelation: string) {
        let isLiked = false;
        try {
            if (relationsSuitorPet && relationsSuitorPet.length > 0) {
                for (const relation of relationsSuitorPet) {
                    const relationDocument = await RelationsPet.findById(relation).exec();
                    if (relationDocument && relationDocument.likes) {
                        isLiked = relationDocument.likes.idPet === idPetRelation;
                        if (isLiked) {
                            return { relationDocument, isLiked };
                        };
                    };
                };
            };
        } catch (error) {
            console.error('Erro ao verificar likes de pets:', error);
            throw new Error("Erro ao verificar likes de pets");
        };
        return isLiked;
    };
};
