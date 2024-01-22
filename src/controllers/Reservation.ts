import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Reservation, { IReservationModel } from '../models/Reservation';

const createReservation = (req: Request, res: Response, next: NextFunction) => {
    const { guestId, roomId, checkInDate, checkOutDate } = req.body;

    if (!guestId || !roomId || !checkInDate || !checkOutDate) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    const reservation = new Reservation({
        guestId,
        roomId,
        checkInDate,
        checkOutDate,
    });

    return reservation
        .save()
        .then((reservation: IReservationModel) => res.status(201).json({ reservation }))
        .catch((error) => res.status(500).json({ error }));
};

const readReservation = (req: Request, res: Response, next: NextFunction) => {
    const reservationId = req.params.reservationId;

    return Reservation.findById(reservationId)
        .then((reservation: IReservationModel | null) => {
            if (!reservation) {
                return res.status(404).json({ message: 'Not found' });
            }
            return res.status(200).json({ reservation });
        })
        .catch((error) => res.status(500).json({ error }));
};

const readAllReservations = (req: Request, res: Response, next: NextFunction) => {
    return Reservation.find()
        .then((reservations: IReservationModel[]) => res.status(200).json({ reservations }))
        .catch((error) => res.status(500).json({ error }));
};

const updateReservation = async (req: Request, res: Response, next: NextFunction) => {
    const reservationId = req.params.reservationId;

    const isValidObjectId = mongoose.Types.ObjectId.isValid(reservationId);

    if (!isValidObjectId) {
        return res.status(400).json({ message: 'Invalid ObjectId format' });
    }

    await Reservation.findByIdAndUpdate(reservationId, req.body).catch((err) => console.log(err.message));

    return res.json({});
};

const deleteReservation = async (req: Request, res: Response, next: NextFunction) => {
    const reservationId = req.params.reservationId;

    const isValidObjectId = mongoose.Types.ObjectId.isValid(reservationId);

    if (!isValidObjectId) {
        return res.status(400).json({ message: 'Invalid ObjectId format' });
    }

    await Reservation.findOneAndDelete({ _id: reservationId }).catch((err) => console.log(err.message));
    return res.json({});
};

export default { createReservation, readReservation, readAllReservations, updateReservation, deleteReservation };
