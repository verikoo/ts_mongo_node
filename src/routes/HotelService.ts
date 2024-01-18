import express from 'express';
import controller from '../controllers/HotelService';

const router = express.Router();

router.post('/', controller.createHotelService);
router.get('t/:hotelServiceId', controller.readHotelService);
router.get('/', controller.readAllHotelService);
router.patch('/:hotelServiceId', controller.updateHotelService);
router.delete('/:hotelServiceId', controller.deleteHotelService);

export = router;