import { Request, Response } from "express";
import FindMyPetsCaseUse from "../models/caseUse/Pet_FindMyPetsCaseUse";

export default class FindMyPetsController{
    async handle(req: Request, res: Response){
        const {id} = res.locals.user;
        const caseUse = new FindMyPetsCaseUse();
        try{
            const pets = await caseUse.execute(id);
            res.status(200).json(pets);    
        }
        catch(err){
            res.status(500).send(err);
        }
    }
}