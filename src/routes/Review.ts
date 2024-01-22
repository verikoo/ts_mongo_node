import express from 'express';
import controller from '../controllers/Review';

const router = express.Router();

router.post('/',  controller.createReview);
router.get('/:hotelServiceId', controller.readReview);
router.get('/', controller.readAllReviews);
router.patch('/:hotelServiceId', controller.updateReview);
router.delete('/:hotelServiceId', controller.deleteReview);

export = router;