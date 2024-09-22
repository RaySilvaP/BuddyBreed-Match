import { Request, Response } from "express";
import { RegisterPetCaseUse } from "../models/caseUse/RegisterPetCaseUse";

export class RegisterPetController{
    async handle(req: Request, res: Response){
        const id = res.locals.user;
        const pet = req.body;
        const registerPetCaseUse = new RegisterPetCaseUse();
        try{
            const result = await registerPetCaseUse.execute(id, pet);
            return res.status(201).json(result);
        }
        catch(e:any){
            res.status(500).send({error: e.message});
        }
    };
}; 