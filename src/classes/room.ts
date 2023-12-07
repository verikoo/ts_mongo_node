class Room{
    id: string;
    roomType: string;
    price: number;
    isBooked: boolean;

    constructor(id: string, roomType:string, price: number){
        this.id=id;
        this.roomType=roomType;
        this.price=price;
        this.isBooked=false;
    }

    getRoomId(): string{
        return this.id;
    }

    getRoomType():string{
        return this.roomType;
    }

    getPrice(): number{
        return this.price;
    }

    isAvailable(): boolean {
        return !this.isBooked;
    }

    bookRoom(): void {
        if (!this.isBooked) {
          this.isBooked = true;
          console.log(`Room ${this.id} booked.`);
        } else {
          console.log(`Room ${this.id} is already booked.`);
        }
      }

}

export{Room};