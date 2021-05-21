import { Router } from 'express';
import { ProdutoVoucherController } from "../controllers/ProdutoVoucherController";

const produtoVoucherRoutes = Router();

const produtoVoucherController = new ProdutoVoucherController();

produtoVoucherRoutes.post("/", produtoVoucherController.create);
produtoVoucherRoutes.put("/:id", produtoVoucherController.update);
produtoVoucherRoutes.get("/:id", produtoVoucherController.findById);

export { produtoVoucherRoutes };