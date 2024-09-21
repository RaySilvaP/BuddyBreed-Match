import { Router } from "express";
import { LikedPetController } from "../controllers/likedPetController";
import { StatusCrossRequestController } from "../controllers/statusCrossRequestController";
import { CrossRequestController } from "../controllers/CrossRquestController";



const routerRelations = Router();
const likedPetController = new LikedPetController();
routerRelations.post("/liked", likedPetController.handle);
const statusCrossRequestController = new StatusCrossRequestController();
routerRelations.get("/statusCrossRequest", statusCrossRequestController.handle);
const crossRequestController = new CrossRequestController();
routerRelations.post("/crossRequest/:id", crossRequestController.handle);


export {routerRelations};
