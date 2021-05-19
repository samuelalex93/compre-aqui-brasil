import { Router } from "express";

import { usuarioUsuarioRoutes } from './routes/usuarioUsuarioRoutes';
import { anuncianteAnuncianteRoutes } from './routes/anuncianteAnuncianteRoutes';
import { loginRoutes } from './routes/loginRoutes';

import { checkJwt } from "./middleware/auth";

const routes = Router();

routes.use('/login', loginRoutes);
routes.use('/usuario',usuarioUsuarioRoutes);

routes.use(checkJwt);

routes.use('/anunciante', anuncianteAnuncianteRoutes);

export { routes };