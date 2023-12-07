import Joi, {ObjectSchema} from "joi";
import {NextFunction, Response, Request} from "express";
import Logging from "../library/Logging";
import { IHotelService } from "../models/HotelService";

export const ValidateSchema = ( schema: ObjectSchema)=>{
    return async(req:Request, res:Response, next:NextFunction)=>{
        try{
            await schema.validateAsync(req.body);
        }catch(error){
            Logging.error(error);
            return res.status(422).json({error});
        }
    };
};

export const Schemas = {
    hotelService:{
        create: Joi.object<IHotelService>({
           serviceName :Joi.string().required(),
           serviceDescription:Joi.string().required(),
           servicePrice: Joi.number().required
        })
    }
};