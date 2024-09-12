import mongoose, { Schema, Document } from "mongoose";
export interface Pets extends Document {
    name: string;
    age: number;
    species: string; 
    breed: string;
    weight?: number;
    size?: number;
    photos?: string[];
};

const PetsSchema = new Schema<Pets>({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    species: { type: String, required: true },
    breed: { type: String, required: true },
    weight: { type: Number },
    size: { type: Number },
    photos: [{ type: String }],
});

const PetsModel = mongoose.model<Pets>('Pets', PetsSchema);
export default PetsModel;
