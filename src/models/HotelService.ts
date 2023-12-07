import mongoose, { Schema, Document } from 'mongoose';


export interface IHotelService{
    serviceName: string ;
    serviceDescription:string;
    servicePrice: number;
}

export interface IHotelServiceModel extends IHotelService, Document{}

const HotelServiceSchema: Schema = new Schema(
    {
    serviceName:{type:String, required:true},
    serviceDescription:{type:String, required:true},
    servicePrice:{type:Number, required:true}
    },
    {versionKey:false}
)

export default mongoose.model<IHotelServiceModel>('HotelService', HotelServiceSchema);