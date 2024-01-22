import {NextFunction, Request, Response} from 'express';
import mongoose from 'mongoose';
import Employee from '../models/Employee';

const createEmployee = (req:Request, res:Response, next:NextFunction) =>{
    const {name, role, contactInfo} = req.body;

    if(!name||!role!||contactInfo)
    {
        return res.status(400).json({error:"All Fields are required"});
    }

    const  employee =  new Employee({
        id: new mongoose.Types.ObjectId(),
        name,
        role,
        contactInfo
    });
    return employee
    .save()
    .then((employee)=>res.status(201).json({employee}))
    .catch((error)=>res.status(500).json({error}));
}

const readEmployee = (req:Request, res: Response, next: NextFunction)=>{
    const  employeeId= req.params.employeeId;

    return Employee.findById(employeeId)
    .then((employee)=>(employee? res.sendStatus(200).json({employee}):res.status(404).json({message:"Not Found"}) ))
    .catch((error)=>res.status(500).json({error}));

}

const readAllEmployee = (req:Request, res:Response, next:NextFunction)=>{
    return Employee.find()
    .then((employees)=>res.status(200).json({employees}))
    .catch((error)=>res.status(500).json({error}));
}

const updateEmployee = async (req:Request, res:Response, next:NextFunction)=>{
    const emoployeeId= req.params.employeeId;

    const isValidObjectId =mongoose.Types.ObjectId.isValid(emoployeeId);

    if(!isValidObjectId){
        return res.status(400).json({message:"invalid ObjectId format"});
    }

    await Employee.findByIdAndUpdate(emoployeeId, req.body).catch(err => console.log(err.message))

    return res.json({})

};

const deleteEmployee = async (req: Request, res: Response, next:NextFunction)=>{
    const employeeId = req.params.employeeId;

    const isValidObjectId = mongoose.Types.ObjectId.isValid(employeeId);

    if(!isValidObjectId){
        return res.status(400).json({message:"Inavlid ObjectId format"});
    }

    await Employee.findOneAndDelete({_id:employeeId}).catch(err=>console.log(err.message));
    return res.json({});
};

export default { createEmployee, readEmployee, readAllEmployee, updateEmployee, deleteEmployee};