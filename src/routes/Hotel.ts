import express from 'express';
import controller from '../controllers/Hotel';

const router = express.Router();

router.post('/create', controller.createHotel);
router.get('/get/:hotelId', controller.readHotel);
router.get('/get/', controller.readAllHotels);
router.patch('/update/:hotelId', controller.updateHotel);
router.delete('/delete/:hotelId', controller.deleteHotel);

router.get('/hotel/:hotelId', controller.getClassInfo);


export = router;
