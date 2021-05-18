import { Router } from "express";

import { usuarioUsuarioRoutes } from './routes/usuarioUsuarioRoutes';
import { anuncianteAnuncianteRoutes } from './routes/anuncianteAnuncianteRoutes';

const routes = Router();

routes.use('/usuario', usuarioUsuarioRoutes);
routes.use('/anunciante', anuncianteAnuncianteRoutes);

export { routes };