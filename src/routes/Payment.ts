import express from 'express';
import controller from '../controllers/Payment';

const router = express.Router();

router.post('/create', controller.createPayment);
router.get('/get/:paymentId', controller.readPayment);
router.get('/get/', controller.readAllPayments);
router.patch('/update/:paymentId', controller.updatePayment);
router.delete('/delete/:paymentId', controller.deletePayment);

export = router;
