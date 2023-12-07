import { Schema, Document, model, Model } from 'mongoose';
import mongoose from 'mongoose';

export interface IRoom {
  roomType: string;
  price: number;
  isBooked: boolean;
}

export interface IRoomModel extends IRoom, Document {}

const RoomSchema: Schema = new Schema(
  {
    roomType: { type: String, required: true },
    price: { type: Number, required: true },
    isBooked: { type: Boolean, required: true },
  },
  { versionKey: false }
);

export default mongoose.model<IRoomModel>('Room', RoomSchema);