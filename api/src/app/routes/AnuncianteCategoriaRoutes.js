import { Router } from 'express';
import anuncianteCategoriaController from '../controllers/AnuncianteCategoriaController';

const router = new Router();

// router.get('/', AnuncianteCategoriaController.index);
router.post('/', anuncianteCategoriaController.store);
// router.put('/:id', AnuncianteCategoriaController.update);
// router.get('/:id', AnuncianteCategoriaController.show);
// router.delete('/:id', AnuncianteCategoriaController.delete);

export default router;
