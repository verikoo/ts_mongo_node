import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Employee from '../models/Employee';
import { validationResult } from 'express-validator';

const createEmployee = (req: Request, res: Response, next: NextFunction) => {

     const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { name, role, contactInfo } = req.body;

    const employee = new Employee({
        _id: new mongoose.Types.ObjectId(),
        name,
        role,
        contactInfo,
    });

    return employee
        .save()
        .then((employee) => res.status(201).json({ employee }))
        .catch((error) => res.status(500).json({ error }));
};

const readEmployee = (req: Request, res: Response, next: NextFunction) => {
    const employeeId = req.params.employeeId;

    return Employee.findById(employeeId)
        .then((employee) => (employee ? res.status(200).json({ employee }) : res.status(404).json({ message: 'Not found' })))
        .catch((error) => res.status(500).json({ error }));
};

const readAllEmployee = (req: Request, res: Response, next: NextFunction) => {
    return Employee.find()
        .then((employees) => res.status(200).json({ employees }))
        .catch((error) => res.status(500).json({ error }));
};

const updateEmployee = async (req: Request, res: Response, next: NextFunction) => {

    const employeeId = req.params.employeeId;

    const isValidObjectId = mongoose.Types.ObjectId.isValid(employeeId);

    if (!isValidObjectId) {
        return res.status(400).json({ message: 'Invalid ObjectId format' });
    }

    await Employee.findByIdAndUpdate(employeeId, req.body).catch(err=>console.log(err.message))

    return res.json({message:"updated"})

};

const deleteEmployee = async (req: Request, res: Response, next: NextFunction) => {
    const employeeId = req.params.employeeId;

    const isValidObjectId = mongoose.Types.ObjectId.isValid(employeeId);

    if (!isValidObjectId) {
        return res.status(400).json({ message: 'Invalid ObjectId format' });
    }

    await Employee.findByIdAndDelete({_id:employeeId}).catch(err=>console.log(err.message));
    return res.json({message:'deleted'});
};

export default { createEmployee, readEmployee, readAllEmployee, updateEmployee, deleteEmployee };
