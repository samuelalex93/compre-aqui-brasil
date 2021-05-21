import { Router } from 'express';
import { AnuncianteCategoriaController } from "../controllers/AnuncianteCategoriaController";

const anuncianteCategoriaRoutes = Router();

const anuncianteCategoriaController = new AnuncianteCategoriaController();

anuncianteCategoriaRoutes.post("/", anuncianteCategoriaController.create);
anuncianteCategoriaRoutes.put("/:id", anuncianteCategoriaController.update);
anuncianteCategoriaRoutes.get("/", anuncianteCategoriaController.findById);

export { anuncianteCategoriaRoutes };
