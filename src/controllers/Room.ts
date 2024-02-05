import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Room from '../models/Room';
import { validationResult } from 'express-validator';


const createRoom = (req:Request, res: Response, next:NextFunction)=>{

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const{roomType, price, isBooked} = req.body;



    const room = new Room({
        _id: new mongoose.Types.ObjectId(),
        roomType,
        price,
        isBooked
    });

    return room
    .save()
    .then((room)=>res.status(201).json({room}))
    .catch((error)=>res.status(500).json({error}));
}

const readRoom = (req:Request, res:Response, next:NextFunction)=>{
    const roomId = req.params.roomId;

    return Room.findById(roomId)
    .then((room)=>(room ? res.status(200).json({room}):res.status(404).json({message: 'Not found'})))
    .catch((error)=>res.status(500).json({error}))
};

const readAllRoom = (req:Request, res:Response, next:NextFunction)=>{
    return Room.find()
    .then((rooms)=>res.status(200).json({rooms}))
    .catch((error)=>res.status(500).json({error}));
};

const updateRoom = async(req:Request, res: Response, next:NextFunction)=>{
    const roomId = req.params.roomId;

    const isValidObjectId = mongoose.Types.ObjectId.isValid(roomId);

    if(!isValidObjectId){
        return res.status(400).json({message:'Invalid ObjectId format'});
    }

   await Room.findByIdAndUpdate(roomId,req.body).catch(err=>console.log(err.message));

   return res.json({message:'updated'})
}


const deleteRoom = async(req:Request, res:Response, next:NextFunction) => {
    const roomId = req.params.roomId;

    const isValidObjectId = mongoose.Types.ObjectId.isValid(roomId);

    if (!isValidObjectId) {
        return res.status(400).json({ message: 'Invalid ObjectId format' });
    }

    await Room.findByIdAndUpdate(roomId, req.body).catch(err => console.log(err.message))

     return res.json({message:"updated"})

   
}

export default { createRoom, readRoom, readAllRoom, updateRoom, deleteRoom};


