import express from 'express';
import controller from '../controllers/Guest';
import { validateGuestCreate } from '../middleware/ValidationMiddleware.ts';

const router = express.Router();

router.post('/', validateGuestCreate, controller.createGuest);
router.get('/:guestId', controller.readGuest);
router.get('/', controller.readAllGuests);
router.patch('/:guestId', controller.updateGuest);
router.delete('/:guestId', controller.deleteGuest);

export = router;