import express from 'express';
import controller from '../controllers/Guest';
import { validateGuestCreate } from '../middleware/ValidationMiddleware.ts';

const router = express.Router();

router.post('/create', validateGuestCreate, controller.createGuest);
router.get('/get/:guestId', controller.readGuest);
router.get('/get/', controller.readAllGuests);
router.patch('/update/:guestId', controller.updateGuest);
router.delete('/delete/:guestId', controller.deleteGuest);

export = router;