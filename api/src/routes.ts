import { Router } from "express";

import { UsuarioUsuarioController } from "./controllers/UsuarioUsuarioController";

const routes = Router();

const usersController = new UsuarioUsuarioController();

routes.post("/users", usersController.create);

routes.get("/users", usersController.findOne);

export { routes };