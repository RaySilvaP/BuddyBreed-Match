import { MulterError } from "multer";
import { Response, Request, NextFunction } from "express";

export default function uploadErrorHandler(err: Error, req: Request, res: Response, next: NextFunction){
    if(err instanceof MulterError){
        res.status(400).send(err.message);
    }
    else
        next(err)
}