import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Payment from '../models/Payment';

const createPayment = (req: Request, res: Response, next: NextFunction) => {
    const { amount, paymentMethod } = req.body;

    if (!amount || !paymentMethod) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    const payment = new Payment({
        _id: new mongoose.Types.ObjectId(),
        amount,
        paymentMethod,
    });

    return payment
        .save()
        .then((payment) => res.status(201).json({ payment }))
        .catch((error) => res.status(500).json({ error }));
};

const readPayment = (req: Request, res: Response, next: NextFunction) => {
    const paymentId = req.params.paymentId;

    return Payment.findById(paymentId)
        .then((payment) => (payment ? res.status(200).json({ payment }) : res.status(404).json({ message: 'Not found' })))
        .catch((error) => res.status(500).json({ error }));
};

const readAllPayments = (req: Request, res: Response, next: NextFunction) => {
    return Payment.find()
        .then((payments) => res.status(200).json({ payments }))
        .catch((error) => res.status(500).json({ error }));
};

const updatePayment = (req: Request, res: Response, next: NextFunction) => {
    const paymentId = req.params.paymentId;

    const isValidObjectId = mongoose.Types.ObjectId.isValid(paymentId);

    if (!isValidObjectId) {
        return res.status(400).json({ message: 'Invalid ObjectId format' });
    }

    return Payment.findById(paymentId)
        .then((payment) => {
            if (payment) {
                payment.set(req.body);

                return payment
                    .save()
                    .then((payment) => res.status(201).json({ payment }))
                    .catch((error) => res.status(500).json({ error }));
            } else {
                return res.status(404).json({ message: 'Not found' });
            }
        })
        .catch((error) => res.status(500).json({ error }));
};

const deletePayment = (req: Request, res: Response, next: NextFunction) => {
    const paymentId = req.params.paymentId;

    return Payment.findById(paymentId)
        .then((payment) => (payment ? res.status(201).json({ message: 'deleted' }) : res.status(404).json({ message: 'Not found' })))
        .catch((error) => res.status(500).json({ error }));
};

export default { createPayment, readPayment, readAllPayments, updatePayment, deletePayment };
