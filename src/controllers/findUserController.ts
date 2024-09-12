import { Request, Response } from "express";
import { FindUserCaseUse } from "../models/caseUse/FindUserCaseUse";

export class FindUserController{
    async handle(req: Request, res: Response){
        const {userName} = req.body;
        const findUserCaseUse = new FindUserCaseUse();
        try {
            const user = await findUserCaseUse.execute(userName);
            return res.status(200).json(user);
        } catch (error:any) {
            return res.status(400).json({message: error.message});            
        };       
    };
};