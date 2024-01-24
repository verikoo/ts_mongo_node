import express from 'express';
import controller from '../controllers/Review';

const router = express.Router();

router.post('/',  controller.createReview);
router.get('/:reviewId', controller.readReview);
router.get('/', controller.readAllReviews);
router.patch('/:reviewId', controller.updateReview);
router.delete('/:reviewId', controller.deleteReview);

export = router;