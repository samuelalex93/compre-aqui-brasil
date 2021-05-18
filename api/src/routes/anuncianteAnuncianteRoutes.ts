import { Router } from 'express';
import { AnuncianteAnuncianteController } from "../controllers/AnuncianteAnuncianteController";

const anuncianteAnuncianteRoutes = Router();

const anuncianteController = new AnuncianteAnuncianteController();

anuncianteAnuncianteRoutes.post("/", anuncianteController.create);

//anuncianteAnuncianteRoutes.get("/", anuncianteController.findOne);

export { anuncianteAnuncianteRoutes };
