import { Router } from "express";
import { routerUser } from "./user.routes";
const routes = Router();

routes.use(routerUser);

export {routes};