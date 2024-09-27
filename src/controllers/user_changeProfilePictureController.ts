import { Request, Response } from "express";
import ChangeProfilePictureCaseUse from "../models/caseUse/User_ChangeProfilePictureCaseUse";

export default class ChangeProfilePictureController{
    async handle(req: Request, res: Response){
        const {id} = res.locals.user;
        const fileName = req.file!.filename;
        const caseUse = new ChangeProfilePictureCaseUse();
        try{
            await caseUse.execute(id, fileName);
            res.status(200).json(fileName);    
        }
        catch(err){
            res.status(500).send(err);
        }
    }
}