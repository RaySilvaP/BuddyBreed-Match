import { RegisterUserCaseUse } from "../models/caseUse/User_RegisterCaseUse";
import { Request, Response } from "express";

export class RegisterUserController{
    async handle(req: Request, res: Response){
        const userData = req.body;
        const registerUserCaseUse = new RegisterUserCaseUse();
        try{
            const user = await registerUserCaseUse.execute(userData);
            return res.status(201).json(user);
        }
        catch(err){
            res.status(500).send(err);
        }
    };
};