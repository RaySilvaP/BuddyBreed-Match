import { Request, Response } from "express";
import DeletePictureCaseUse from "../models/caseUse/Pet_DeletePictureCaseUse";

export default class DeletePictureController{
    async handle(req: Request, res: Response){
        const {id, file} = req.params;
        const caseUse = new DeletePictureCaseUse();
        try{
            await caseUse.execute(id, file);
            res.sendStatus(200);
        }
        catch(err){
            res.status(500).send(err);
        }
    }
}