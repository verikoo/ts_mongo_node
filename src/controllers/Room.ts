import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Room from '../models/Room';

const createRoom = (req:Request, res: Response, next:NextFunction)=>{
    const{roomType, price, isBooked} = req.body;

    if(!roomType||!price||!isBooked){
        return res.status(400).json({error: 'All fields are required'});
    }

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

const updateRoom = (req:Request, res: Response, next:NextFunction)=>{
    const roomId = req.params.roomId;

    const isValidObjectId = mongoose.Types.ObjectId.isValid(roomId);

    if(!isValidObjectId){
        return res.status(400).json({message:'Invalid ObjectId format'});
    }

    return Room.findById(roomId)
    .then((room)=>{
        if(room){
            room.set(req.body);

            return room
            .save()
            .then((room)=>res.status(201).json({room}))
            .catch((error)=>res.status(500).json({error}))
        }else{

            return res.status(4044).json({message:'Not found'})
        }
    })
    .catch((error)=>res.status(500).json({error}));
}


const deleteRoom = (req:Request, res:Response, next:NextFunction) => {
    const roomId = req.params.roomId;

    return Room.findByIdAndDelete(roomId)
        .then((room) => (room ? res.status(201).json({ room, message: 'Deleted' }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
}

export default { createRoom, readRoom, readAllRoom, updateRoom, deleteRoom};


