import { Request, Response } from "express";
import UploadPicturesCaseUse from "../models/caseUse/Pet_UploadPicturesCaseUse";

export default class UploadPicturesController{
    async handle(req: Request, res: Response){
        const {id} = req.params;
        const files = req.files as Express.Multer.File[];
        const filesNames = files?.map((file) => {return file.filename});
        const caseUse = new UploadPicturesCaseUse();
        try{
            await caseUse.execute(id, filesNames);
            res.status(200).json(filesNames);
        }
        catch(err){
            res.status(500).send(err);
        }
    }
}