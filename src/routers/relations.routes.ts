import { Router } from "express";
import { LikedPetController } from "../controllers/pet_likedController";
import { StatusCrossRequestController } from "../controllers/cross_statusRequestController";
import { CrossRequestController } from "../controllers/cross_requestController";
import { authenticate } from "../middlewares/token_verify";

const routerRelations = Router();

const likedPetController = new LikedPetController();
const statusCrossRequestController = new StatusCrossRequestController();
const crossRequestController = new CrossRequestController();

routerRelations.post("/cross/:id", authenticate, crossRequestController.handle);
routerRelations.get("/statusCrossRequest", authenticate, statusCrossRequestController.handle);
routerRelations.post("/liked", authenticate, likedPetController.handle);


export {routerRelations};
