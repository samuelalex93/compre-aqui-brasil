import dotenv from 'dotenv';
import express from 'express';
import { routes } from './routes';

dotenv.config();

import "./database";

const app = express();

app.use(express.json());

app.use(routes);

export { app };