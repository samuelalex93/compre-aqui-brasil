import { Router } from 'express';
import { UsuarioUsuarioController } from "../controllers/UsuarioUsuarioController";

const usuarioUsuarioRoutes = Router();

const usuarioController = new UsuarioUsuarioController();

usuarioUsuarioRoutes.post("", usuarioController.create);

usuarioUsuarioRoutes.get("", usuarioController.findOne);

export { usuarioUsuarioRoutes };
