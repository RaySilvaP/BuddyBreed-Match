import { Request, Response } from "express";
import LoginCaseUse from "../models/caseUse/User_LoginCaseUse";


export class LoginController {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body;
        const caseUse = new LoginCaseUse();
        try{
            const result = await caseUse.execute(email, password);
            res.status(200).json(result);
        }
        catch(err){
            res.status(500).send(err);
        }
    };
};
