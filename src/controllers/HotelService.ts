import { NextFunction, Request, Response } from "express";
import mongoose  from "mongoose";
import HotelService from "../models/HotelService";
import { validationResult } from 'express-validator';


 
const createHotelService = (req:Request, res: Response, next: NextFunction) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { serviceName, serviceDescription, servicePrice } = req.body;


    const hotelService = new HotelService({
        _id: new mongoose.Types.ObjectId(),
        serviceName,
        serviceDescription,
        servicePrice
    });

    return hotelService
    .save()
    .then((hotelService)=>res.status(201).json({hotelService}))
    .catch((error)=>res.status(500).json({error}));
}

const readHotelService = (req:Request, res: Response, next: NextFunction) => {
    const hotelServiceId = req.params.hotelServiceId;

    return HotelService.findById(hotelServiceId)
    .then((hotelService)=>(hotelService ? res.status(200).json({hotelService}): res.status(404).json({message: 'Not found'})))
    .catch((error)=>res.status(500).json({error}));
};


const readAllHotelService = (req:Request, res: Response, next: NextFunction) => {
    return HotelService.find()
    .then((hotelServices)=>res.status(200).json({hotelServices}))
    .catch((error)=>res.status(500).json({error}));

};


const updateHotelService = async (req:Request, res: Response, next: NextFunction) => {

const hotelServiceId = req.params.hotelServiceId;

const isValidObjectId = mongoose.Types.ObjectId.isValid(hotelServiceId);

if (!isValidObjectId) {
    return res.status(400).json({ message: 'Invalid ObjectId format' });
}

await HotelService.findByIdAndUpdate(hotelServiceId, req.body).catch(err=>console.log(err.message))

return res.json({message:"updated"})

};



const deleteHotelService = async (req:Request, res: Response, next: NextFunction) => {
     const hotelServiceId = req.params.hotelServiceId;

      const isValidObjectId = mongoose.Types.ObjectId.isValid(hotelServiceId);

      if (!isValidObjectId) {
        return res.status(400).json({ message: 'Invalid ObjectId format' });
    }

    await HotelService.findOneAndDelete({ _id: hotelServiceId }).catch(err => console.log(err.message));
    
    return res.json({message:'deleted'});
};

export default {createHotelService, readHotelService, readAllHotelService, updateHotelService, deleteHotelService};