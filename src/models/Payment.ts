import { Schema, Document, model, Model } from 'mongoose';
import mongoose from 'mongoose';


export interface IPayment {
  amount: number;
  paymentMethod: string;
}

export interface IPaymentModel extends IPayment, Document {}

const PaymentSchema: Schema = new Schema(
  {
    amount: { type: Number, required: true },
    paymentMethod: { type: String, required: true },
  },
  { versionKey: false }
);


export default mongoose.model<IPaymentModel>('HotelSerPaymentvice', PaymentSchema);