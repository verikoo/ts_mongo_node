class HotelService{
    serviceName: string ;
    serviceDescription:string;
    servicePrice: number;


    constructor(serviceName: string , serviceDescription: string, servicePrice:number){
        this.serviceName=serviceName;
        this.serviceDescription =serviceDescription;
        this.servicePrice=servicePrice;
    }

    getServiceName(): string{
        return this.serviceName
    }

    getServiceDes(): string{
        return this.serviceDescription;
    }

    getServicePrice(): number{
        return this.servicePrice
    }

    
}

export {HotelService};