import { Router } from "express";

import { usuarioUsuarioRoutes } from './routes/usuarioUsuarioRoutes';
import { anuncianteAnuncianteRoutes } from './routes/anuncianteAnuncianteRoutes';
import { anuncianteCategoriaRoutes } from './routes/anuncianteCategoriaRoutes';
import { produtoProdutoRoutes } from './routes/produtoProdutoRoutes';
import { produtoDenunciaRoutes } from './routes/produtoDenunciaRoutes';
import { produtoImportacaodeprodutoRoutes } from './routes/produtoImportacaodeprodutoRoutes';
import { produtoVoucherRoutes } from './routes/produtoVoucherRoutes';
import { produtoWishlistRoutes } from './routes/produtoWishlistRoutes';
import { loginRoutes } from './routes/loginRoutes';
import { geoRoutes } from './routes/geoRoutes';

import { checkJwt } from "./middleware/auth";

const routes = Router();

routes.use('/login', loginRoutes);
routes.use('/usuario',usuarioUsuarioRoutes);

routes.use(checkJwt);

routes.use('/anunciante', anuncianteAnuncianteRoutes);
routes.use('/categoria', anuncianteCategoriaRoutes);
routes.use('/produto', produtoProdutoRoutes);
routes.use('/produto/denuncia', produtoDenunciaRoutes);
routes.use('/produto/importacao', produtoImportacaodeprodutoRoutes);
routes.use('/produto/voucher', produtoVoucherRoutes);
routes.use('/produto/wishlist', produtoWishlistRoutes);
routes.use('/', geoRoutes);

export { routes };