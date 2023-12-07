 class Guest {
    name: string;
    contactInfo?: {
      phone: string;
      email: string;
      address: string;
    };
    nationality: string;
    dateOfBirth: Date;
    idNumber: string;
   

  
    constructor(name: string, contactInfo: any, nationality: string, dateOfBirth: Date, idNumber: string) {
      this.name = name;
      this.contactInfo = contactInfo;
      this.nationality = nationality;
      this.dateOfBirth = dateOfBirth;
      this.idNumber = idNumber;
      
    }

    getGuestName(): string{
      return this.name;
    }

    getNationality(): string {
      return this.nationality;
    }
  
    getDateOfBirth(): Date {
      return this.dateOfBirth;
    }
  
    getIdNumber(): string {
      return this.idNumber;
    }
  

    getContactInfo(): { phone: string; email: string; address: string } | undefined {
      return this.contactInfo;
    }
  
    
  }
  
  export {Guest};
  