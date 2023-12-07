    import { Guest } from "./guest";
    import { Room } from "./room";
    import { HotelService } from "./hotelService";

    class  Hotel{
    id:string;
    name: string;
    owner: string;
    fullAddress: string;
    contactInfo:string;
    totalRooms: number;
    bookedRooms: number;
    guests: Guest[];
    rooms: Room[];
    hotelServices: HotelService[];

    constructor(id:string, name:string, owner:string, fullAddress:string, contactInfo:string, totalRooms:number,  bookedRooms: number ){
        this.id=id;
        this.name=name;
        this.owner=owner;
        this.fullAddress=fullAddress;
        this.contactInfo=contactInfo;
        this.totalRooms=totalRooms;
        this.bookedRooms=0;

        this.guests = [];
        this.rooms=[];
        this.hotelServices=[];
    }

    checkAvailability(): number {
        return this.totalRooms - this.bookedRooms;
      }

    displayContactInfo(): void {
        console.log(`Contact Information for ${this.name}`);
        console.log(`Owner: ${this.owner}`);
        console.log(`Address: ${this.fullAddress}`);
        console.log(`Contact: ${this.contactInfo}`);
      }
      
      addGuest(guest: Guest): void {
        this.guests.push(guest);
        console.log(`${guest.getGuestName} added to the guest list.`);
      }

      addRoom(room: Room): void {
        this.rooms.push(room);
        console.log(`Room ${room.getRoomId} added to the hotel.`);
      }

      addService(hotelServices: HotelService): void {
        this.hotelServices.push(hotelServices);
        console.log(`Service ${hotelServices.getServiceName()} added to the hotel.`);
      }

      checkIn(guest: Guest, room: Room): void {
        console.log(`${guest.getGuestName} checked into Room ${room.getRoomId()}.`);
        room.bookRoom();
      }



    }

    export{Hotel}

