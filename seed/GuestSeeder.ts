import mongoose from 'mongoose';
import Guest from '../src/models/Guest';
import faker from 'faker';


const generateRandomGuest = () => {
  const randomNumber = Math.floor(10000000000 + Math.random() * 90000000000); //TEST RANDOM LIKE COUNTRY ID
  return {
    name: faker.name.findName(),
    contactInfo: faker.internet.email(),
    nationality: faker.address.country(),
    dateOfBirth: faker.date.past(30),
    idNumber: String(randomNumber),
  };
};

const seedGuests = async () => {
    try {
        await Guest.deleteMany(); // Clear all existing guests

        // Generate 50 random guests
        const guestsData = Array.from({ length: 50 }, generateRandomGuest);

        // Insert the mock data into the Guest collection
        const insertedGuests = await Guest.insertMany(guestsData);

        console.log('Guests seeded successfully:', insertedGuests);
    } catch (error) {
        console.error('Error seeding guests:', error);
    } finally {
        mongoose.disconnect();
    }
};

seedGuests();
