import express from 'express';
import controller from '../controllers/Room';

const router = express.Router();

router.post('/create', controller.createRoom);
router.get('/get/:roomId', controller.readRoom);
router.get('/get/', controller.readAllRoom);
router.patch('/update/:roomId', controller.updateRoom);
router.delete('/delete/:roomId', controller.deleteRoom);

export = router;