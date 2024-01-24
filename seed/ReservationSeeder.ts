// import mongoose from 'mongoose';
// import ReservationModel, { IReservation } from '../src/models/Reservation';
// import GuestModel from '../src/models/Guest';  
// import RoomModel from '../src/models/Room'; 

// export async function seedReservations(): Promise<void> {
//   await ReservationModel.deleteMany({});


//   const existingGuest = await GuestModel.findOne({  });
//   const existingRoom = await RoomModel.findOne({});


//   if (!existingGuest || !existingRoom) {
//     console.error('Error: Existing guest or room not found.');
//     return;
//   }


//   const reservationsData: IReservation[] = [
//     {
//       guestId: existingGuest._id,
//       roomId: existingRoom._id,
//       checkInDate: new Date('2022-02-01'),
//       checkOutDate: new Date('2022-02-10'),
//     },
//   ];

//   try {
   
//     await ReservationModel.insertMany(reservationsData);
//     console.log('Reservations seeded successfully');
//   } catch (error) {
//     console.error('Error seeding reservations:', error);
//   } finally {
//     mongoose.disconnect();
//   }
// }


// seedReservations();
