  import { Schema, Document, model, Model } from 'mongoose';
  import mongoose from 'mongoose';

  export interface IGuest {
    name: string;
    contactInfo: string;
    nationality: string;
    dateOfBirth: Date;
    idNumber: string;
  }

  export interface IGuestModel extends IGuest, Document {}

  const GuestSchema: Schema = new Schema(
    {
      name: { type: String, required: true },
      contactInfo: { type: String, required: true },
      nationality: { type: String, required: true },
      dateOfBirth: { type: Date, required: true },
      idNumber: { type: String, required: true },
    },
    { versionKey: false }
  );

  export default mongoose.model<IGuestModel>('Guest', GuestSchema);
