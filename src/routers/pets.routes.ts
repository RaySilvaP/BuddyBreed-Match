import { Router } from "express";
import { RegisterPetController } from "../controllers/registerPetController";
import { FindOnePetController } from "../controllers/findOnePetController";
import { FindSimilarPetsController } from "../controllers/findSimilarPetsController";

const routerPets = Router();

const registerPetController = new RegisterPetController();
const findOnePetController = new FindOnePetController();
const findSimilarPetsController = new FindSimilarPetsController();

routerPets.get('/pets/:id', findOnePetController.handle);
routerPets.post('/pets', registerPetController.handle);
routerPets.post('/pets/similar', findSimilarPetsController.handle);

export { routerPets };