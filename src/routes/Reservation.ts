import express from 'express';
import controller from '../controllers/Reservation';


const router = express.Router();

router.post('/', controller.createReservation);
router.get('/:employeeId', controller.readReservation);
router.get('/', controller.readAllReservations);
router.patch('/:employeeId', controller.updateReservation);
router.delete('/:employeeId', controller.deleteReservation);

export = router;