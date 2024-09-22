import { Request, Response } from "express";
import { LikedPetCaseUse } from "../models/caseUse/Pet_LikedCaseUse";

export class LikedPetController{
    async handle(req: Request, res: Response){
        const idPetData = req.body;
        const likedPetCaseUse = new LikedPetCaseUse();
        try {
            const result = await likedPetCaseUse.execute(idPetData);
            return res.json(result); 
        } catch (error:any) {
            return res.status(400).json({message: error.message});
            
        }    
    }
}