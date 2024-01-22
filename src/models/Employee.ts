  import { Schema, Document, model, Model } from 'mongoose';
  import mongoose from 'mongoose';

  export interface IEmployee{
    name: string;
    role: string;
    contactInfo: string;
  }

  export interface IEmployeeModel extends IEmployee, Document{}

  const EmployeeSchema: Schema =  new Schema({
    name: {type: String, required: true},
    role: {type: String, required: true},
    contactInfo: {type: String, required: true}
  },
  {versionKey: false}
  );

  export default mongoose.model<IEmployeeModel>('Employee', EmployeeSchema );