import { PrismaClient } from '@prisma/client';
import { Prancha } from '../models/pranchaModel';

const prisma = new PrismaClient();

export const obterTodasPranchas = async (): Promise<Prancha[]> => {
  return prisma.prancha.findMany();
};

export const salvarPrancha = async (prancha: Prancha): Promise<Prancha> => {
  return prisma.prancha.create({ data: prancha });
};