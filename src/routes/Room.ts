import express from 'express';
import controller from '../controllers/Room';

const router = express.Router();

router.post('/', controller.createRoom);
router.get('/:roomId', controller.readRoom);
router.get('/', controller.readAllRoom);
router.patch('/:roomId', controller.updateRoom);
router.delete('/:roomId', controller.deleteRoom);

export = router;