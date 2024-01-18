import express from 'express';
import controller from '../controllers/Payment';

const router = express.Router();

router.post('/', controller.createPayment);
router.get('/:paymentId', controller.readPayment);
router.get('/', controller.readAllPayments);
router.patch('/:paymentId', controller.updatePayment);
router.delete('/:paymentId', controller.deletePayment);

export = router;
