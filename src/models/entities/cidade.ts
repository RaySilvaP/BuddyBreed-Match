import mongoose, { Schema, Document } from "mongoose";

export interface CidadeType extends Document {
    nome: string;
    estado: string;
    regiao?: string;
    populacao?: number;
};

const cidadeSchema = new Schema<CidadeType>({
    nome: { type: String, required: true },
    estado: { type: String, required: true },
    regiao: { type: String },
    populacao: { type: Number }
});

const CidadeModel = mongoose.model<CidadeType>('Cidades', cidadeSchema);

export default CidadeModel;