import { Router } from 'express';
import { ProdutoDenunciaController } from "../controllers/ProdutoDenunciaController";

const produtoDenunciaRoutes = Router();

const produtoDenunciaController = new ProdutoDenunciaController();

produtoDenunciaRoutes.post("/", produtoDenunciaController.create);
produtoDenunciaRoutes.put("/:id", produtoDenunciaController.update);
produtoDenunciaRoutes.get("/:id", produtoDenunciaController.findById);

export { produtoDenunciaRoutes };
