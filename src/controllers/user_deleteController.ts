import { Request, Response } from "express";
import { DeleteUserCaseUse } from "../models/caseUse/User_DeleteCaseUse"

export class DeleteuserController{    
    async handle(req: Request, res: Response):Promise<Response>{
        const { id } = req.params;
        const deleteUserCase = new DeleteUserCaseUse();
        try {
            const result = await deleteUserCase.execute(id);
            return res.status(200).json({message:'Usuário deletado com sucesso'});
        } catch (error) {
            return res.status(500).json({message:error})
        };
    };
};