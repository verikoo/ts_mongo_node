import mongoose from 'mongoose';
import { Schema, Document, model, Model, Types } from 'mongoose';
import { IGuest, IGuestModel } from './Guest'; // Import the Guest interfaces if they exist

export interface IHotel {
  name: string;
  owner: string;
  fullAddress: string;
  contactInfo: string;
  totalRooms: number;
  bookedRooms: number;
  // guests: Types.Array<IGuest | Types.ObjectId>;
  guests: mongoose.Types.ObjectId[];
}

export interface IHotelModel extends IHotel, Document {}

const HotelSchema: Schema = new Schema(
  {
   name: { type: String, required: true },
    owner: { type: String, required: true },
    fullAddress: { type: String, required: true },
    contactInfo: { type: String, required: true },
    totalRooms: { type: Number, required: true },
    bookedRooms: { type: Number, required: true },
    guests: [{ type: Schema.Types.ObjectId, ref: 'Guest' }],
  },
  { versionKey: false }
);

export default mongoose.model<IHotelModel>('Hotel', HotelSchema);

