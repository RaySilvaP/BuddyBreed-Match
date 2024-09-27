import { Request, Response } from "express";
import { DeleteUserCaseUse } from "../models/caseUse/User_DeleteCaseUse"

export class DeleteuserController{    
    async handle(req: Request, res: Response){
        const { id } = res.locals.user;
        const deleteUserCase = new DeleteUserCaseUse();
        try{
            const result = await deleteUserCase.execute(id);
            res.status(200).json({message:'Usuário deletado com sucesso'});
        }
        catch(err){
            res.status(500).send(err);
        }
    };
};