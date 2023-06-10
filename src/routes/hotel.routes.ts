import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (_req: Request, res: Response) => {
  res.send('Busca os hoteis');
});

router.post('/', (_req: Request, res: Response) => {
  res.send('Cadastra hotel');
});

router.patch('/:id', (_req: Request, res: Response) => {
  res.send('Atualiza hotel');
});

export default router;