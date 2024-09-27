import { Request, Response } from "express";
import { RegisterPetCaseUse } from "../models/caseUse/Pet_RegisterCaseUse";

export class RegisterPetController {
    async handle(req: Request, res: Response) {
        const { id } = res.locals.user;
        const petData = req.body;
        const registerPetCaseUse = new RegisterPetCaseUse();
        try{
            const result = await registerPetCaseUse.execute(id, petData);
            return res.status(201).json(result);    
        }
        catch(err){
            res.status(500).send(err);
        }
    };
};
