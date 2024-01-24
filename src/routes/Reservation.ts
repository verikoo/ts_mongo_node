import express from 'express';
import controller from '../controllers/Reservation';


const router = express.Router();

router.post('/', controller.createReservation);
router.get('/:reservationId', controller.readReservation);
router.get('/', controller.readAllReservation);
router.patch('/:reservationId', controller.updateReservation);
router.delete('/:reservationId', controller.deleteReservation);

export = router;