import { Router } from 'express';
import { ProdutoProdutoController } from "../controllers/ProdutoProdutoController";

const produtoProdutoRoutes = Router();

const produtoProdutoController = new ProdutoProdutoController();

produtoProdutoRoutes.post("/", produtoProdutoController.create);
produtoProdutoRoutes.put("/:id", produtoProdutoController.update);
produtoProdutoRoutes.get("/:id", produtoProdutoController.findById);

export { produtoProdutoRoutes };
