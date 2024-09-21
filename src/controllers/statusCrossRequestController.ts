import { Request, Response } from "express";
import { StatusCrossRequestCaseUse } from "../models/caseUse/StatusCrossRequestCaseUse";

export class StatusCrossRequestController{
    async handle(req: Request, res: Response){
        const idPetData = req.body;
        const statusCrossRequestCaseUse = new StatusCrossRequestCaseUse();
     try {            
        const result = await statusCrossRequestCaseUse.execute(idPetData);
        return res.json(result);  
     } catch (error:any) {
        res.status(404).json({ error: error.message });
     }
    };
};