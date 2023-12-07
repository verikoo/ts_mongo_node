import { NextFunction, Request, Response } from "express";
import mongoose  from "mongoose";
import HotelService from "../models/HotelService";

 
const createHotelService = (req:Request, res: Response, next: NextFunction) => {
    const { serviceName, serviceDescription, servicePrice } = req.body;

    if (!serviceName || !serviceDescription || !servicePrice) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

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


const updateHotelService = (req:Request, res: Response, next: NextFunction) => {
     const hotelServiceId = req.params.hotelServiceId;

     const isValidObjectId = mongoose.Types.ObjectId.isValid(hotelServiceId);

if (!isValidObjectId) {
    return res.status(400).json({ message: 'Invalid ObjectId format' });
}


      return HotelService.findById(hotelServiceId)
    .then((hotelService)=>{
        if(hotelService)
        {
            hotelService.set(req.body);

            return hotelService
            .save()
            .then((hotelService)=>res.status(201).json({hotelService}))
            .catch((error)=>res.status(500).json({error}));
        }
        else{
            return res.status(404).json({message: 'Not found'})
        }
    })
    .catch((error)=>res.status(500).json({error}));
};



const deleteHotelService = (req:Request, res: Response, next: NextFunction) => {
     const hotelServiceId = req.params.hotelServiceId;

     return HotelService.findById(hotelServiceId)
     .then((hotelService) =>(hotelService ? res.status(201).json({message: 'deleted' }): res.status(404).json({message: 'Not found'})))
     .catch((error)=>res.status(500).json({error}));
};

export default {createHotelService, readHotelService, readAllHotelService, updateHotelService, deleteHotelService};