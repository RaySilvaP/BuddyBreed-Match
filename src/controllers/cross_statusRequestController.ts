import { Request, Response } from "express";
import { StatusCrossRequestCaseUse } from "../models/caseUse/Cross_StatusRequestCaseUse";

export class StatusCrossRequestController{
    async handle(req: Request, res: Response){
        const idPetData = req.body;
        const statusCrossRequestCaseUse = new StatusCrossRequestCaseUse(); 
        try{
            const result = await statusCrossRequestCaseUse.execute(idPetData);
            return res.status(200).json(result);
        }
        catch(err){
            res.status(500).send(err);
        }
    };
};