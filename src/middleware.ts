import { JwtPayload } from "jsonwebtoken";
import { verifyToken } from "./service/jwtService";
import { Request, Response, NextFunction } from "express";

function authentication(req: Request, res: Response, next: NextFunction){
    const token = req.header('Authorization') as string;
    try{
        const decoded = verifyToken(token) as JwtPayload;
        res.locals.user = decoded.user;
        next();
    }catch{
        return res.sendStatus(401);
    }
}

export {authentication};