import { Request, Response } from "express";
import { UpdateUserCaseUse } from "../models/caseUse/User_UpdateCaseUse";

export class UpdateUserController{
    async handle(req: Request, res: Response){
        const { id } = res.locals.user;
        const updateData = req.body;
        const updateUserCaseUse = new UpdateUserCaseUse();
        try{
            const user = await updateUserCaseUse.execute(id, updateData);
            return res.status(200).json({user, message:'Os dados foram salvos com sucesso!'});
        }
        catch(err){
            res.status(500).send(err);
        }
    };
};
