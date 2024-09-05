import { RegisterUserCaseUse } from "../models/caseUser/RegisterUserCaseUse";
import { Request, Response } from "express";

export class RegisterUserController{
    async handle(request: Request, response: Response){
        const {userName, email, password} = request.body;
        const registerUserCaseUse = new RegisterUserCaseUse();
        const user = await registerUserCaseUse.execute({userName, email, password});
        return response.status(201).json(user);
    }
}