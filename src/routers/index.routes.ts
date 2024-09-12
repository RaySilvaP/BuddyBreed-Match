import { Router } from "express";
import { routerUser } from "./user.routes";
import { routerPets } from "./pets.routes";
const routes = Router();

routes.use(routerUser);
routes.use(routerPets)

export {routes};