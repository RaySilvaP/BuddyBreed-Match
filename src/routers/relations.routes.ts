import { Router } from "express";
import { LikedPetController } from "../controllers/pet_likedController";
import { StatusCrossRequestController } from "../controllers/cross_statusRequestController";
import { CrossRequestController } from "../controllers/cross_requestController";
import { authenticate } from "../middlewares/token_verify";
import { VerifyCityController } from "../controllers/FindCityController"; 

const routerRelations = Router();

const likedPetController = new LikedPetController();
const statusCrossRequestController = new StatusCrossRequestController();
const crossRequestController = new CrossRequestController();
const verifyCityController = new VerifyCityController(); 

routerRelations.post("/cross/:id", authenticate, crossRequestController.handle);
routerRelations.get("/statusCrossRequest", authenticate, statusCrossRequestController.handle);
routerRelations.post("/liked", authenticate, likedPetController.handle);
routerRelations.get("/cidade/:nome", verifyCityController.handle); 

export { routerRelations };