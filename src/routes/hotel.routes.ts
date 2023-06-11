import { Router, Request, Response } from 'express';
import { HotelController } from '../controller/hotel.controller';
import { HotelService } from '../service/hotel.service';
import { HotelRepository } from '../database/model/repository/Hotel.repository';

const router = Router();

const hotelRepository = new HotelRepository();

const hotelService = new HotelService(hotelRepository);

const hotelController = new HotelController(hotelService);

router.post('/', hotelController.createHotel);

export default router;