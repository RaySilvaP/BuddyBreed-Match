import { Router } from "express";
import { RegisterPetController } from "../controllers/registerPetController";
import { FindOnePetController } from "../controllers/findOnePetController";

const routerPets = Router();

const registerPetController = new RegisterPetController();
const findOnePetController = new FindOnePetController();

routerPets.get('/pets/:id', findOnePetController.handle);
routerPets.post("/pets/:id", registerPetController.handle);

export { routerPets };