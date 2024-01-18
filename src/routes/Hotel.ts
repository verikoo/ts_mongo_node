import express from 'express';
import controller from '../controllers/Hotel';

const router = express.Router();

router.post('/', controller.createHotel);
router.get('/', controller.readAllHotels);
router.get('/:hotelId', controller.readHotel);
router.patch('/:hotelId', controller.updateHotel);
router.delete('/:hotelId', controller.deleteHotel);

router.get('/:hotelId', controller.getClassInfo);


export = router;
