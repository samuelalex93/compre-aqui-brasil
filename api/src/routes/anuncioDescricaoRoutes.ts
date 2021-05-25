import { Router } from 'express';
import { AnuncioDescricaoController } from "../controllers/AnuncioDescricaoController";

const anuncioDescricaoRoutes = Router();

const anuncioDescricaoController = new AnuncioDescricaoController();

anuncioDescricaoRoutes.post("/", anuncioDescricaoController.create);
anuncioDescricaoRoutes.put("/:id", anuncioDescricaoController.update);
anuncioDescricaoRoutes.delete("/:id", anuncioDescricaoController.delete);
anuncioDescricaoRoutes.get("/anunciante/:id", anuncioDescricaoController.findOne);

export { anuncioDescricaoRoutes };
