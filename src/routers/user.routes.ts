import { Router } from "express";
import { RegisterUserController } from "../controllers/registerUserController";
import { DeleteuserController } from "../controllers/deleteUserController";
import { UpdateUserController } from "../controllers/updateUserController";
import { FindUserController } from "../controllers/findUserController";

const routerUser = Router();

const registerUserController = new RegisterUserController();
const deleteUserController = new DeleteuserController();
const updateUserController = new UpdateUserController();
const findUserController = new FindUserController();

routerUser.post('/user',registerUserController.handle);
routerUser.delete('/user/:id', deleteUserController.handle);
routerUser.put('/user/:id', updateUserController.handle);
routerUser.get('/user', findUserController.handle);

export { routerUser };