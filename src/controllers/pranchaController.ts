import { Request, Response } from 'express';
import { obterTodasPranchas, salvarPrancha } from '../repositories/pranchaRepository';

export const listarPranchas = async (req: Request, res: Response) => {
  try {
    const pranchas = await obterTodasPranchas();
    res.json(pranchas);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao listar pranchas' });
  }
};

export const adicionarPrancha = async (req: Request, res: Response) => {
  const { quantidade, tamanhoEmPes, cor } = req.body;

  if (!quantidade || !tamanhoEmPes || !cor) {
    return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' });
  }

  try {
    const novaPrancha = await salvarPrancha({ quantidade, tamanhoEmPes, cor });
    res.status(201).json(novaPrancha);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao cadastrar prancha' });
  }
};  