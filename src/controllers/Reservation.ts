import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Reservation from '../models/Reservation';
import { validationResult } from 'express-validator';


const createReservation = (req: Request, res: Response, next: NextFunction) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { guestId, roomId, checkInDate, checkOutDate } = req.body;


    const reservation = new Reservation({
        _id: new mongoose.Types.ObjectId(),
        guestId,
        roomId,
        checkInDate,
        checkOutDate,
    });

    return reservation
        .save()
        .then((reservation) => res.status(201).json({ reservation }))
        .catch((error) => res.status(500).json({ error }));
};

const readReservation = (req: Request, res: Response, next: NextFunction) => {
    const reservationId = req.params.reservationId;

    return Reservation.findById(reservationId)
        .then((reservation) =>
            reservation ? res.status(200).json({ reservation }) : res.status(404).json({ message: 'Not found' })
        )
        .catch((error) => res.status(500).json({ error }));
};

const readAllReservation = (req: Request, res: Response, next: NextFunction) => {
    return Reservation.find()
        .then((reservations) => res.status(200).json({ reservations }))
        .catch((error) => res.status(500).json({ error }));
};

const updateReservation = async(req: Request, res: Response, next: NextFunction) => {
    const reservationId = req.params.reservationId;

    const isValidObjectId = mongoose.Types.ObjectId.isValid(reservationId);

    if (!isValidObjectId) {
        return res.status(400).json({ message: 'Invalid ObjectId format' });
    }

    await Reservation.findByIdAndUpdate(reservationId, req.body).catch(err => console.log(err.message))

    return res.json({message:"updated"})

};

const deleteReservation = async(req: Request, res: Response, next: NextFunction) => {
    const reservationId = req.params.reservationId;

    const isValidObjectId = mongoose.Types.ObjectId.isValid(reservationId);

    if (!isValidObjectId) {
        return res.status(400).json({ message: 'Invalid ObjectId format' });
    }

    await Reservation.findOneAndDelete({ _id: reservationId }).catch(err => console.log(err.message));
    return res.json({message:'deleted'});

    
};

export default { createReservation, readReservation, readAllReservation, updateReservation, deleteReservation };
