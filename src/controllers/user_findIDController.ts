import { Request, Response } from "express";
import { FindUserByIdCaseUse } from "../models/caseUse/User_FindIDCaseUse"; // Importando o caso de uso de busca por ID

export class FindUserByIdController {
    async handle(req: Request, res: Response) {
        const { id } = req.params; // O ID será passado como parâmetro na URL
        const findUserByIdCaseUse = new FindUserByIdCaseUse();

        try {
            const user = await findUserByIdCaseUse.execute(id); // Busca o usuário pelo ID
            return res.status(200).json(user); // Retorna o usuário encontrado
        } catch (err:any) {
            return res.status(500).json({ error: err.message }); // Retorna o erro, se houver
        }
    }
}