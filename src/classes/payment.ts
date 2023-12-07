class Payment{
    id: string;
    amount: number;
    paymentMethod: string;    
    constructor(id: string, amount: number, paymentMethod: string){
        this.id=id;
        this.amount=amount;
        this.paymentMethod=paymentMethod;
    }

    getId(): string{
        return this.id;
    }
    
    getAmount(): number{
        return this.amount;
    }

    getPaymentMethod(): string{
        return this.paymentMethod;
    }

    getTransactionInfo(): string{
        return `Payment Details - Method: ${this.getPaymentMethod()}, Amount: $${this.getAmount()}, Transaction ID: ${this.getId()}`;
    }

    
}

export {Payment};