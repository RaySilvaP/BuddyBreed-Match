import { JwtPayload } from "jsonwebtoken";
import { verifyToken } from "./service/jwtService";
import { Request, Response, NextFunction } from "express";
import { MulterError } from "multer";

function authenticate(req: Request, res: Response, next: NextFunction){
    const token = req.header('Authorization') as string;
    try{
        const decoded = verifyToken(token) as JwtPayload;
        res.locals.user = decoded.user;
        next();
    }catch{
        return res.sendStatus(403);
    }
}

const authorize = {
    admin: (req: Request, res: Response, next: NextFunction) => {
        const user = res.locals.user;
        if(user.role == 'admin')
            next();
        else
            res.sendStatus(401);
    },
    petOwner: (req: Request, res: Response, next: NextFunction) => {
        throw('not implemented');
    }
}

function uploadErrorHandler(err: Error, req: Request, res: Response, next: NextFunction){
    if(err instanceof MulterError){
        res.status(400).send(err.message);
    }
    else
        next(err)
}

export {authenticate, authorize, uploadErrorHandler};