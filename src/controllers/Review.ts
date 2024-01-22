import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Review from '../models/Review';

const createReview = (req: Request, res: Response, next: NextFunction) => {
    const { guestId, rating, comments } = req.body;

    if (!guestId || !rating || !comments) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    const review = new Review({
        _id: new mongoose.Types.ObjectId(),
        guestId,
        rating,
        comments,
    });

    return review
        .save()
        .then((review) => res.status(201).json({ review }))
        .catch((error) => res.status(500).json({ error }));
};

const readReview = (req: Request, res: Response, next: NextFunction) => {
    const reviewId = req.params.reviewId;

    return Review.findById(reviewId)
        .then((review) => (review ? res.status(200).json({ review }) : res.status(404).json({ message: 'Not found' })))
        .catch((error) => res.status(500).json({ error }));
};

const readAllReviews = (req: Request, res: Response, next: NextFunction) => {
    return Review.find()
        .then((reviews) => res.status(200).json({ reviews }))
        .catch((error) => res.status(500).json({ error }));
};

const updateReview = async (req: Request, res: Response, next: NextFunction) => {
    const reviewId = req.params.reviewId;

    const isValidObjectId = mongoose.Types.ObjectId.isValid(reviewId);

    if (!isValidObjectId) {
        return res.status(400).json({ message: 'Invalid ObjectId format' });
    }

    await Review.findByIdAndUpdate(reviewId, req.body).catch((err) => console.log(err.message));

    return res.json({});
};

const deleteReview = async (req: Request, res: Response, next: NextFunction) => {
    const reviewId = req.params.reviewId;

    const isValidObjectId = mongoose.Types.ObjectId.isValid(reviewId);

    if (!isValidObjectId) {
        return res.status(400).json({ message: 'Invalid ObjectId format' });
    }

    await Review.findOneAndDelete({ _id: reviewId }).catch((err) => console.log(err.message));
    return res.json({});
};

export default { createReview, readReview, readAllReviews, updateReview, deleteReview };
