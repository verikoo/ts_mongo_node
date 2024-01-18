import mongoose from 'mongoose';
import GuestModel, { IGuest } from '../src/models/Guest';
export async function seedGuests(): Promise<void> {
  await GuestModel.deleteMany({}); // Clear all existing guests

  // Create an array of mock guest data
  const guestsData: IGuest[] = [
    {
      name: 'John Doe',
      contactInfo: 'john@example.com',
      nationality: 'US',
      dateOfBirth: new Date('1990-01-01'),
      idNumber: '1234567890',
    },
 
  ];

  try {
    // Insert the mock data into the Guest collection
    await GuestModel.insertMany(guestsData);
    console.log('Guests seeded successfully');
  } catch (error) {
    console.error('Error seeding guests:', error);
  } finally {
    mongoose.disconnect(); 
  }
}


seedGuests();