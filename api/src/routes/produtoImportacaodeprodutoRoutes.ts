import { Router } from 'express';
import { ProdutoImportacaodeprodutoController } from "../controllers/ProdutoImportacaodeprodutoController";

const produtoImportacaodeprodutoRoutes = Router();

const produtoImportacaodeprodutoController = new ProdutoImportacaodeprodutoController();

produtoImportacaodeprodutoRoutes.post("/", produtoImportacaodeprodutoController.create);
produtoImportacaodeprodutoRoutes.put("/:id", produtoImportacaodeprodutoController.update);
produtoImportacaodeprodutoRoutes.get("/:id", produtoImportacaodeprodutoController.findById);

export { produtoImportacaodeprodutoRoutes };
