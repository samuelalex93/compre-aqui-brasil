import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multerConfig';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileUserController';
import ClaimsController from './app/controllers/ClaimsController';
import DiscountController from './app/controllers/DiscountController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);
routes.post('/files', upload.single('file'), FileController.store);

routes.post('/denuncias', ClaimsController.store);
routes.post('/denuncias/:id', ClaimsController.update);

routes.post('/descontos', DiscountController.store);
routes.post('/descontos/:id', DiscountController.update);

export default routes;
