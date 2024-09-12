import { JwtPayload } from "jsonwebtoken";
import { verifyToken } from "./service/jwtService";
import { Request, Response, NextFunction } from "express";
import { MulterError } from "multer";

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

function authorization(role: string){
    return (req: Request, res: Response, next: NextFunction) => {
        const userRole = res.locals.user.role;
        if(userRole == role || userRole == 'admin')
            next();
        else
            res.sendStatus(401);
    }
}

function uploadErrorHandler(err: Error, req: Request, res: Response, next: NextFunction){
    if(err instanceof MulterError){
        res.status(400).send(err.message);
    }
    else
        next(err)
}

export {authentication, authorization, uploadErrorHandler};