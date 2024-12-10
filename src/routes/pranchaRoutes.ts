import { Router } from 'express';
import { listarPranchas, adicionarPrancha } from '../controllers/pranchaController';

const router = Router();

router.get('/', listarPranchas);
router.post('/', adicionarPrancha);

export default router;

// src/controllers/pranchaController.ts
import { Request, Response } from 'express';

const pranchas: any[] = [];

export const listarPranchas = (req: Request, res: Response) => {
  res.json(pranchas);
};

export const adicionarPrancha = (req: Request, res: Response) => {
  const { quantidade, tamanhoEmPes, cor } = req.body;

  if (!quantidade || !tamanhoEmPes || !cor) {
    return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' });
  }

  const novaPrancha = { quantidade, tamanhoEmPes, cor };
  pranchas.push(novaPrancha);
  res.status(201).json(novaPrancha);
};