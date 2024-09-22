import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const validateRegisterUser = async (req: Request, res: Response, next: NextFunction) => {
    const userSchema = Joi.object({
        userName: Joi.string().min(4).max(30).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
    });

    const { error } = userSchema.validate(req.body);

    if (error) {        
        return res.status(400).json({ message: error.message });
    }
    next(); 
};

export default validateRegisterUser;
