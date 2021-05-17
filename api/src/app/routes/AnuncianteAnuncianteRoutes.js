import { Router } from 'express';
import anuncianteAnuncianteController from '../controllers/AnuncianteAnuncianteController';

const router = new Router();

// router.get('/', AnuncianteAnuncianteController.index);
router.post('/', anuncianteAnuncianteController.store);
// router.put('/:id', AnuncianteAnuncianteController.update);
// router.get('/:id', AnuncianteAnuncianteController.show);
// router.delete('/:id', AnuncianteAnuncianteController.delete);

export default router;
