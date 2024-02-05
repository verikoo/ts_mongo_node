import { Schema, Document, Model } from 'mongoose';
import mongoose from 'mongoose';


export interface IReservation{
    guestId: mongoose.Types.ObjectId;
    roomId: mongoose.Types.ObjectId;
    checkInDate: Date;
    checkOutDate: Date;
  }

export interface IReservationModel extends IReservation, Document{}

const ReservationSchema: Schema = new Schema({
  guestId: { type: mongoose.Types.ObjectId, ref: 'Guest', required: true },
  roomId: { type: mongoose.Types.ObjectId, ref: 'Room', required: true },
  checkInDate: { type: Date, required: true },
  checkOutDate: { type: Date, required: true },
});

export default mongoose.model<IReservationModel>('Reservation', ReservationSchema);

