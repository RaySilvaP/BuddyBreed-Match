import { Router } from "express";
import { RegisterUserController } from "../controllers/registerUserController";

const routerUser = Router();
const registerUserController = new RegisterUserController();
routerUser.post("/user", registerUserController.handle);
export { routerUser };