import { JwtPayload } from "jsonwebtoken";
import { verifyToken } from "./service/jwtService";
import { Request, Response, NextFunction, Errback } from "express";
import multer, { MulterError } from "multer";

function authentication(req: Request, res: Response, next: NextFunction){
    const token = req.header('Authorization') as string;
    try{
        const decoded = verifyToken(token) as JwtPayload;
        res.locals.user = decoded.user;
        next();
    }catch{
        return res.sendStatus(403);
    }
}

function uploadErrorHandler(err: Errback, req: Request, res: Response, next: NextFunction){
    if(err instanceof MulterError){
        console.error(err.message)
        res.status(400).send(err.message);
    }
    else
        next(err)
}

export {authentication, uploadErrorHandler};