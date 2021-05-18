import dotenv from 'dotenv';
import express from 'express';
// import { routes } from './routes';

import { usuarioUsuarioRoutes } from './routes/usuarioUsuarioRoutes';

dotenv.config();

import "./database";

const app = express();

app.use(express.json());

// app.use(routes);

app.use('/users/', usuarioUsuarioRoutes);

export { app };