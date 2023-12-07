import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Hotel from '../models/Hotel';

const createHotel = (req: Request, res: Response, next: NextFunction) => {
    const { name, owner, fullAddress, contactInfo, totalRooms, bookedRooms, guests } = req.body;

    if (!name || !owner || !fullAddress || !contactInfo || !totalRooms || !bookedRooms || !guests) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

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

const readHotel = (req: Request, res: Response, next: NextFunction) => {
    const hotelId = req.params.hotelId;

    return Hotel.findById(hotelId)
        .then((hotel) => (hotel ? res.status(200).json({ hotel }) : res.status(404).json({ message: 'Not found' })))
        .catch((error) => res.status(500).json({ error }));
};

const readAllHotels = (req: Request, res: Response, next: NextFunction) => {
    return Hotel.find()
        .then((hotels) => res.status(200).json({ hotels }))
        .catch((error) => res.status(500).json({ error }));
};

const updateHotel = (req: Request, res: Response, next: NextFunction) => {
    const hotelId = req.params.hotelId;

    const isValidObjectId = mongoose.Types.ObjectId.isValid(hotelId);

    if (!isValidObjectId) {
        return res.status(400).json({ message: 'Invalid ObjectId format' });
    }

    return Hotel.findById(hotelId)
        .then((hotel) => {
            if (hotel) {
                hotel.set(req.body);

                return hotel
                    .save()
                    .then((hotel) => res.status(201).json({ hotel }))
                    .catch((error) => res.status(500).json({ error }));
            } else {
                return res.status(404).json({ message: 'Not found' });
            }
        })
        .catch((error) => res.status(500).json({ error }));
};

const deleteHotel = (req: Request, res: Response, next: NextFunction) => {
    const hotelId = req.params.hotelId;

    return Hotel.findById(hotelId)
        .then((hotel) => (hotel ? res.status(201).json({ message: 'deleted' }) : res.status(404).json({ message: 'Not found' })))
        .catch((error) => res.status(500).json({ error }));
};

export default { createHotel, readHotel, readAllHotels, updateHotel, deleteHotel };
