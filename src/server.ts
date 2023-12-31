import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import { config } from './config/config';
import Logging from './library/Logging';

import hotelServcieRoutes from './routes/HotelService';


const router = express();


/** Connect to Mongo */ 
mongoose
.connect(config.mongo.url, { retryWrites: true, w:'majority'})
.then(()=>{Logging.info('Connected to MongoDB');
    StartServer(); 
})
.catch(error => {
    Logging.error('Unable to connect: ');
    Logging.error(error);

});


/** Only start the server when mongo connects */ 
const StartServer =  () =>{
    router.use((req,res,next)=>{
        /** Log The Request */
        Logging.info(`Incomming  -> Method: [${req.method}] -  Url: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

        res.on('finish', ()=>{
            /** Log The response */
            Logging.info(`Incomming  -> Method: [${req.method}] -  Url: [${req.url}] - IP: [${req.socket.remoteAddress}] - status: [${res.statusCode}]`);
        });
        
        next(); 
    });
    
    router.use(express.urlencoded({extended:true}));
    router.use(express.json());
    
    /** rules of API */
    router.use((req,res,next)=>{
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Hedaers', 'Origin, X-Requested-With, Content-type, Accept, Authorization');

        if(req.method == 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
            return res.status(200).json({});
        }

        next();
    });

    /** Routes */
    router.use('/hotelServices', hotelServcieRoutes);
     

    /** Helathckeck*/
    router.get('/ping', (req,res, next)=> res.status(200).json({message:'pong'}));

    /** Error handling */
    router.use((req, res, next)=>{
        const error = new Error('not found');
        Logging.error(error);

        return res.status(404).json({message: error.message});
    });

    http.createServer(router).listen(config.server.port, ()=> Logging.info(`Server is running on
     port ${config.server.port}`));


};

