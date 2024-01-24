import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Hotel from '../models/Hotel';
import Guest from '../models/Guest';
import { validationResult } from 'express-validator';



const createHotel = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, owner, fullAddress, contactInfo, totalRooms, bookedRooms, guests } = req.body;

   
    const hotel = new Hotel({
        _id: new mongoose.Types.ObjectId(),
        name,
        owner,
        fullAddress,
        contactInfo,
        totalRooms,
        bookedRooms,
        guests,
    });

    return hotel
        .save()
        .then((hotel) => res.status(201).json({ hotel }))
        .catch((error) => res.status(500).json({ error }));
};

const readHotel = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const hotelId = req.params.hotelId;

        const guestsCount = await Guest.countDocuments();

        const hotel = await Hotel.findById(hotelId).lean();

        if (hotel) {
            res.json({
                ...hotel,
                guestsCount: guestsCount,
            });
        } else {
            res.status(404).json({
                data: []
            });
        }
    } catch (error) {
        res.status(500).json({ error });
    }
};


const readAllHotels = (req: Request, res: Response, next: NextFunction) => {
    return Hotel.find()
        .then((hotels) => res.status(200).json({ hotels }))
        .catch((error) => res.status(500).json({ error }));
};

const updateHotel = async (req: Request, res: Response, next: NextFunction) => {
    const hotelId = req.params.hotelId;

    const isValidObjectId = mongoose.Types.ObjectId.isValid(hotelId);

    if (!isValidObjectId) {
        return res.status(400).json({ message: 'Invalid ObjectId format' });
    }

    await Hotel.findByIdAndUpdate(hotelId, req.body).catch(err=>console.log(err.message));

    return res.json({message:'updated'})

};

const deleteHotel = async (req: Request, res: Response, next: NextFunction) => {
    const hotelId = req.params.hotelId;
     const isValidObjectId = mongoose.Types.ObjectId.isValid(hotelId);


    await Hotel.findByIdAndDelete({_id:hotelId}).catch(err=>console.log(err.message));

    return res.json({message:"deleted"});
};


// count guest 

const getClassInfo = async (req: Request, res: Response, next: NextFunction) => {
    const hotelId = req.params.hotelId;

    try {
        const guestClass = await Hotel.findById(hotelId).populate('guests');

        if (!guestClass) {
            return res.status(404).json({ message: 'Class not found' });
        }

        const guestCount = guestClass.guests.length;

        return res.status(200).json({ hotel: guestClass, guestCount });
    } catch (error) {
        return res.status(500).json({ error });
    }
};



export default { readAllHotels, createHotel, readHotel, updateHotel, deleteHotel ,getClassInfo};
