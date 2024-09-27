import { Request, Response, NextFunction } from 'express';
import User from '../models/entities/user';

const verifyExistsIdUser = async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.findById(res.locals.user.id);
    if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado." });
    };
    next(); 
};

export default verifyExistsIdUser;