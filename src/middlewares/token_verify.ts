import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../service/jwtService";
import { JwtPayload } from "jsonwebtoken";

export function authenticate(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(" ")[1]; 
    if (!token) {
        return res.status(401).json({ message: "Token não fornecido!" });
    };
    try {
        const payload = verifyToken(token) as JwtPayload;
        res.locals.user = payload.user;
        next(); 
    } catch (error) {
        console.error("Erro ao verificar o token:", error);
        return res.status(403).json({ message: "Token inválido!" });
    };
};
