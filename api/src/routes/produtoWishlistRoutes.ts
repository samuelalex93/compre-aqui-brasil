import { Router } from 'express';
import { ProdutoWishlistController } from "../controllers/ProdutoWishlistController";

const produtoWishlistRoutes = Router();

const produtoWishlistController = new ProdutoWishlistController();

produtoWishlistRoutes.post("/", produtoWishlistController.create);
produtoWishlistRoutes.put("/:id", produtoWishlistController.update);
produtoWishlistRoutes.get("/:id", produtoWishlistController.findById);

export { produtoWishlistRoutes };
