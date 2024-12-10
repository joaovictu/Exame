import { Router } from 'express';
import * as pranchaController from '../controllers/pranchaController';

const router = Router();

router.get('/', pranchaController.listarPranchas);
router.post('/', pranchaController.adicionarPrancha);

export default router;