import { Router } from "express";
import { RegisterUserController } from "../controllers/user_registerController";
import { DeleteuserController } from "../controllers/user_deleteController";
import { UpdateUserController } from "../controllers/user_updateController";
import { FindUserController } from "../controllers/user_findController";
import validateRegisterUser from "../middlewares/user_validateRegister";
import validateUpdateUser from "../middlewares/user_validateUpdate";
import verifyExistsIdUser from "../middlewares/user_verifyExistsId";
import VerifyUniqueData from "../middlewares/user_VerifyUniqueData";
import { authenticate } from "../middlewares/token_verify";
import { LoginController } from "../controllers/user_loginController";
import upload from '../config/uploadConfig';
import ChangeProfilePictureController from "../controllers/user_changeProfilePictureController";

const routerUser = Router();

const registerUserController = new RegisterUserController();
const deleteUserController = new DeleteuserController();
const updateUserController = new UpdateUserController();
const findUserController = new FindUserController();
const loginController = new LoginController();
const changeProfilePictureController = new ChangeProfilePictureController();

routerUser.post('/login', loginController.handle);
routerUser.post('/user', VerifyUniqueData, validateRegisterUser, registerUserController.handle);
routerUser.put('/user/picture', authenticate, upload.single('picture'), changeProfilePictureController.handle)
routerUser.delete('/user',authenticate,  verifyExistsIdUser, deleteUserController.handle);
routerUser.put('/user', authenticate, verifyExistsIdUser,  validateUpdateUser, updateUserController.handle);
routerUser.get('/user', findUserController.handle);

export { routerUser };