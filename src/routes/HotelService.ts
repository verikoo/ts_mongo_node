import express from 'express';
import controller from '../controllers/HotelService';

const router = express.Router();

router.post('/create', controller.createHotelService);
router.get('/get/:hotelServiceId', controller.readHotelService);
router.get('/get/', controller.readAllHotelService);
router.patch('/update/:hotelServiceId', controller.updateHotelService);
router.delete('/delete/:hotelServiceId', controller.deleteHotelService);

export = router;