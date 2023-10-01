import { Response, Request } from 'express';
import { HotelService } from '../service/hotel.service';

export class HotelController {
  private hotelService: HotelService;
  
  constructor(services: HotelService) {
    this.hotelService = services;
  }

  public createHotel = async (req:Request, res:Response) => {
    try {
      const result = await this.hotelService.insertHotel(req.body);

      if (result.statusCode !== 201) {
        return res.status(result.statusCode).send({ message: result.message});
      }

      return res.status(result.statusCode).send(result.result);
    } catch (error) {
      res.status(400).send((error as Error).message);
    }
  }
};