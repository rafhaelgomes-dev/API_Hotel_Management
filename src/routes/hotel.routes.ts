import { Router, Request, Response } from 'express';
import { HotelController } from '../controller/hotel.controller';
import { HotelService } from '../service/hotel.service';

const router = Router();

const hotelService = new HotelService();

const hotelController = new HotelController(hotelService);

router.post('/', hotelController.createHotel);

export default router;