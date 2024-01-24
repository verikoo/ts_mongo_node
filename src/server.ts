import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import { config } from './config/config';
import Logging from './library/Logging';
import swaggerUi from "swagger-ui-express";

// import routes
import hotelServcieRoutes from './routes/HotelService';
import paymentRout from './routes/Payment';
import roomRout from './routes/Room';
import hotelRout from './routes/Hotel'
import guestRoute from "./routes/Guest";

// new routes 
import reviewRoute from './routes/Review';
import reservationRoute from './routes/Reservation';
import employeeRoute from './routes/Employee';

// Import Swagger setup
import { setupSwagger } from './swagger';


const app = express();

// Set up Swagger UI
setupSwagger(app);


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
    app.use((req,res,next)=>{
        /** Log The Request */
        Logging.info(`Incomming  -> Method: [${req.method}] -  Url: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

        res.on('finish', ()=>{
            /** Log The response */
            Logging.info(`Incomming  -> Method: [${req.method}] -  Url: [${req.url}] - IP: [${req.socket.remoteAddress}] - status: [${res.statusCode}]`);
        });
        
        next(); 
    });
    
    app.use(express.urlencoded({extended:true}));
    app.use(express.json());
    
    /** rules of API */
    app.use((req,res,next)=>{
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Hedaers', 'Origin, X-Requested-With, Content-type, Accept, Authorization');

        if(req.method == 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
            return res.status(200).json({});
        }

        next();
    });

    /** Routes */
    app.use('/hotelServices', hotelServcieRoutes);
    app.use('/payment',paymentRout );
    app.use('/room', roomRout);
    app.use('/hotel', hotelRout);
    app.use('/guest', guestRoute);
    app.use('/hotelService', hotelServcieRoutes);
    app.use('/employee', employeeRoute);
    app.use('/reservation', reservationRoute);
    app.use('/review', reviewRoute);

    /** Helathckeck*/
    app.get('/ping', (req,res, next)=> res.status(200).json({message:'pong'}));

    /** Error handling */
    app.use((req, res, next)=>{
        const error = new Error('not found');
        Logging.error(error);

        return res.status(404).json({message: error.message});
    });

    http.createServer(app).listen(config.server.port, ()=> Logging.info(`Server is running on
     port ${config.server.port}`));


};


export default app;

