import { Router, Request, Response } from 'express';
import { HotelController } from '../controller/Hotel.controller';

const router = Router();

router.get('/', HotelController.findOne);

router.post('/', (_req: Request, res: Response) => {
  res.send('Cadastra hotel');
});

router.patch('/:id', (_req: Request, res: Response) => {
  res.send('Atualiza hotel');
});

export default router;