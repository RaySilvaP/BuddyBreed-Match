import { Request, Response } from "express";
import { RegisterPetCaseUse } from "../models/caseUse/Pet_RegisterCaseUse";

export class RegisterPetController {
    async handle(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const petData = req.body;

            const registerPetCaseUse = new RegisterPetCaseUse();
            const result = await registerPetCaseUse.execute(id, petData);
            
            return res.status(201).json(result);
        } catch (error:any) {
            return res.status(400).json({ message: error.message }); 
        }
    }
}
