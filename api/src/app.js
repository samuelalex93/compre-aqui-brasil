import 'dotenv/config';

import express from 'express';
import path from 'path';
import 'express-async-errors';
import routes from './routes';

import anuncianteAnuncianteRoutes from './app/routes/AnuncianteAnuncianteRoutes';
import anuncianteCategoriaRoutes from './app/routes/AnuncianteCategoriaRoutes';

import './database';

class App {
  constructor() {
    this.server = express();

    this.middleware();
    this.routes();
    this.exceptionHanler();
  }

  middleware() {
    this.server.use(express.json());
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    this.server.use(routes);
    this.server.use('/anunciante/', anuncianteAnuncianteRoutes);
    this.server.use('/anunciante/categoria', anuncianteCategoriaRoutes)
  }

  exceptionHanler() {
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON();

        return res.status(500).json(errors);
      }

      return res.status(500).json({ error: 'Internal server error' });
    });
  }
}

export default new App().server;
