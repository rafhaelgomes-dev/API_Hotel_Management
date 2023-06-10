import * as express from 'express';
import hotelRoutes from './hotel.routes';

const router = express.Router();

router.use('/hotel', hotelRoutes);

export default router;