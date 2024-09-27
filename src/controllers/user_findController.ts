import { Request, Response } from "express";
import { FindUserCaseUse } from "../models/caseUse/User_FindCaseUse";

export class FindUserController{
    async handle(req: Request, res: Response){
        const {userName} = req.body;
        const findUserCaseUse = new FindUserCaseUse();
        try{
            const user = await findUserCaseUse.execute(userName);
            return res.status(200).json(user); 
        }     
        catch(err){
            res.status(500).send(err);
        }
    };
};