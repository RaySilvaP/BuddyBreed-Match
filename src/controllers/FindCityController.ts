import { Request, Response } from "express";
import { FindCityCaseUse } from "../models/caseUse/FindCityCaseUse";

export class VerifyCityController {
    async handle(request: Request, response: Response) {
        const { nome } = request.params;

        if (!nome) {
            return response.status(400).json({
                error: "Nome da cidade é obrigatório"
            });
        }

        try {
            const findCityCaseUse = new FindCityCaseUse();
            const cidadeExiste = await findCityCaseUse.execute(nome);

            return response.status(200).json({
                exists: cidadeExiste
            });
            
        } catch (error) {
            return response.status(500).json({
                error: "Erro interno do servidor ao verificar cidade"
            });
        }
    }
}