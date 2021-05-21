import { Router } from 'express';
import { AnuncianteAnuncianteController } from "../controllers/AnuncianteAnuncianteController";

const anuncianteAnuncianteRoutes = Router();

const anuncianteController = new AnuncianteAnuncianteController();

anuncianteAnuncianteRoutes.post("/", anuncianteController.create);
anuncianteAnuncianteRoutes.put("/:id", anuncianteController.update);
anuncianteAnuncianteRoutes.get("/", anuncianteController.findByEmail);

export { anuncianteAnuncianteRoutes };
