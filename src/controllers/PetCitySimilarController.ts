import { Request, Response } from "express";
import PetCitySimilarCaseUse from "../models/caseUse/PetCitySimilarCaseUse";

export class PetCitySimilarController {
    async handle(req: Request, res: Response) {
        const { id } = res.locals.user; // Apenas o ID do usuário
        
        const caseUse = new PetCitySimilarCaseUse();       
        try {
            const pets = await caseUse.execute(id);
            res.status(200).json(pets);
        } catch (err:any) {
            if (err.message === 'Owner not found') {
                return res.status(404).json({ error: "Usuário não encontrado" });
            }
            
            console.error("Erro no PetCitySimilarController:", err);
            res.status(500).json({ error: "Erro interno ao buscar pets por cidade" });
        }
    }
}

export default new PetCitySimilarController();