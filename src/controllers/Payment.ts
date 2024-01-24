import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Payment from '../models/Payment';
import { validationResult } from 'express-validator';


const createPayment = (req: Request, res: Response, next: NextFunction) => {
    
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { amount, paymentMethod } = req.body;

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

const updatePayment = async(req: Request, res: Response, next: NextFunction) => {
    const paymentId = req.params.paymentId;

    const isValidObjectId = mongoose.Types.ObjectId.isValid(paymentId);

    if (!isValidObjectId) {
        return res.status(400).json({ message: 'Invalid ObjectId format' });
    }

      await Payment.findByIdAndUpdate(paymentId, req.body).catch(err => console.log(err.message))

     return res.json({message:"updated"})

};

const deletePayment = async (req: Request, res: Response, next: NextFunction) => {
    const paymentId = req.params.paymentId;

    const isValidObjectId = mongoose.Types.ObjectId.isValid(paymentId);

    if (!isValidObjectId) {
        return res.status(400).json({ message: 'Invalid ObjectId format' });
    }

    await Payment.findOneAndDelete({ _id: paymentId }).catch(err => console.log(err.message));
    
    return res.json({message:'deleted'});
};

export default { createPayment, readPayment, readAllPayments, updatePayment, deletePayment };
