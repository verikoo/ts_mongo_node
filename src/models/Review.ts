import { Schema, Document, Model } from 'mongoose';
import mongoose from 'mongoose';
import { contextsKey } from 'express-validator/src/base';

export interface IReview{
    guestId: mongoose.Types.ObjectId;
    rating: number;
    comments: string;
}

export interface IReviewModel extends IReview, Document {}

const ReviewSchema: Schema = new Schema({
  guestId: { type: mongoose.Types.ObjectId, ref: 'Guest', required: true },
  rating: { type: Number, required: true },
  comments: { type: String, required: true },
});

export default mongoose.model<IReviewModel>('Review', ReviewSchema);