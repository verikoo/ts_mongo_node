import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Guest from '../models/Guest';

const createGuest = (req: Request, res: Response, next: NextFunction) => {
    const { name, contactInfo, nationality, dateOfBirth, idNumber } = req.body;

    if (!name || !contactInfo || !nationality || !dateOfBirth || !idNumber) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    const guest = new Guest({
        _id: new mongoose.Types.ObjectId(),
        name,
        contactInfo,
        nationality,
        dateOfBirth,
        idNumber,
    });

    return guest
        .save()
        .then((guest) => res.status(201).json({ guest }))
        .catch((error) => res.status(500).json({ error }));
};

const readGuest = (req: Request, res: Response, next: NextFunction) => {
    const guestId = req.params.guestId;

    return Guest.findById(guestId)
        .then((guest) => (guest ? res.status(200).json({ guest }) : res.status(404).json({ message: 'Not found' })))
        .catch((error) => res.status(500).json({ error }));
};

const readAllGuests = (req: Request, res: Response, next: NextFunction) => {
    return Guest.find()
        .then((guests) => res.status(200).json({ guests }))
        .catch((error) => res.status(500).json({ error }));
};

const updateGuest = async (req: Request, res: Response, next: NextFunction) => {
    const guestId = req.params.guestId;

    const isValidObjectId = mongoose.Types.ObjectId.isValid(guestId);

    if (!isValidObjectId) {
        return res.status(400).json({ message: 'Invalid ObjectId format' });
    }

     await Guest.findByIdAndUpdate(guestId, req.body).catch(err => console.log(err.message))

     return res.json({})
};


const deleteGuest = async (req: Request, res: Response, next: NextFunction) => {
    const guestId = req.params.guestId;

    const isValidObjectId = mongoose.Types.ObjectId.isValid(guestId);

    if (!isValidObjectId) {
        return res.status(400).json({ message: 'Invalid ObjectId format' });
    }

        await Guest.findOneAndDelete({ _id: guestId }).catch(err => console.log(err.message));
        return res.json({});
};


export default { createGuest, readGuest, readAllGuests, updateGuest, deleteGuest };
