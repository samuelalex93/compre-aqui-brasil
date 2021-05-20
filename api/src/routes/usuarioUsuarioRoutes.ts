import { Router } from 'express';
import { UsuarioUsuarioController } from "../controllers/UsuarioUsuarioController";

import { checkJwt } from "../middleware/auth";

const usuarioUsuarioRoutes = Router();

const usuarioController = new UsuarioUsuarioController();

usuarioUsuarioRoutes.post("/", usuarioController.create);

usuarioUsuarioRoutes.use(checkJwt);

usuarioUsuarioRoutes.get("/", usuarioController.listAll);
usuarioUsuarioRoutes.put("/:id", usuarioController.update);
usuarioUsuarioRoutes.get("/:id", usuarioController.findById);
usuarioUsuarioRoutes.delete("/:id", usuarioController.delete);

export { usuarioUsuarioRoutes };
