import { RegisterUserCaseUse } from "../models/caseUse/RegisterUserCaseUse";
import { Request, Response } from "express";

export class RegisterUserController{
    async handle(req: Request, res: Response){
        const {userName, email, password} = req.body;
        const registerUserCaseUse = new RegisterUserCaseUse();
        try {
            const user = await registerUserCaseUse.execute({userName, email, password});
            return res.status(201).json(user);
        } catch (error:any) {
            return res.status(400).json({message: error.message});            
        };
    };
};