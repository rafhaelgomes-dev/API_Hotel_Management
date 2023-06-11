import { Response, Request } from 'express';

export class HotelController {
  public static findOne = (req: Request, res: Response): Response  => {
    return res.status(200).send({ message: 'ok' });
  }
}