import { Request, Response } from "express";
import { CrossRequesCaseUse } from "../models/caseUse/CrossRequestCaseUse";

export class CrossRequestController{
    async handle(req: Request, res: Response){
        const { id } = req.params;
        const {statusCross, petId} = req.body;
        try {
            const crossRequestCaseUse = new CrossRequesCaseUse();
        const result = await crossRequestCaseUse.execute(id, statusCross, petId);
        return res.json(result);
        } catch (error:any) {
            return res.status(400).json({message: error.message});
            
        }
    }
}