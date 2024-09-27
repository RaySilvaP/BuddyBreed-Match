import { Router } from "express";

import { RegisterPetController } from "../controllers/pet_registerController";
import { FindOnePetController } from "../controllers/pet_findOneController";
import { DeletePetController } from "../controllers/pet_deleteController";
import { UpdatePetController } from "../controllers/pet_updateController";
import verifyExistsIdUser from "../middlewares/user_verifyExistsId";
import verifyExistsIdPet from "../middlewares/pet_verifyExistsId";
import { FindSimilarPetsController } from "../controllers/pet_findSimilarPetsController";
import { authenticate } from "../middlewares/token_verify";
import FindMyPetsController from "../controllers/pet_FindMyPetsController";
import UploadPicturesController from "../controllers/pet_uploadPicturesController";
import upload from '../config/uploadConfig';
import DeletePictureController from "../controllers/pet_deletePictureController";

const routerPets = Router();

const registerPetController = new RegisterPetController();
const findOnePetController = new FindOnePetController();
const deletePetController = new DeletePetController();
const updatePetController = new UpdatePetController();
const findSimilarPetsController = new FindSimilarPetsController();
const findMyPetsController = new FindMyPetsController();
const uploadPicturesController = new UploadPicturesController();
const deletePictureController = new DeletePictureController();

routerPets.get('/pets/:id', authenticate, verifyExistsIdPet, findOnePetController.handle);
routerPets.get('/pets', authenticate, verifyExistsIdUser, findMyPetsController.handle);
routerPets.post("/pets", authenticate, verifyExistsIdUser, registerPetController.handle);
routerPets.post('/pets/:id/pictures', authenticate, verifyExistsIdPet, upload.array('picture'), uploadPicturesController.handle);
routerPets.delete("/pets/:id", authenticate, verifyExistsIdPet, deletePetController.handle);
routerPets.delete('/pets/:id/pictures/:file', authenticate, verifyExistsIdPet, deletePictureController.handle);
routerPets.put("/pets/:id", authenticate, verifyExistsIdPet, updatePetController.handle);
routerPets.post('/pets/similar', authenticate, findSimilarPetsController.handle);

export { routerPets };