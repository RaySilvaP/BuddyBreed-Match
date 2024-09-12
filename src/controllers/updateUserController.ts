import { Request, Response } from "express";
import { UpdateUserCaseUse } from "../models/caseUse/UpdateUserCaseUse";

export class UpdateUserController{
    async handle(req: Request, res: Response){
        const { id } = req.params;
        const updateData = req.body;
        if (!id) {
            return res.status(400).json({ error: 'ID é necessário para realizar a ação!' });
        };
        const updateUserCaseUse = new UpdateUserCaseUse();
        try {
            const user = await updateUserCaseUse.execute(id, updateData);
            return res.status(200).json({user, message:'Os dados foram salvos com sucesso!'});
        } catch (error) {
            return res.status(400).json({ error: error });
        };
    };
};
