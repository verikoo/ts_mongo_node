class Payment{
    
    amount: number;
    paymentMethod: string;    
    constructor(id: string, amount: number, paymentMethod: string){
        
        this.amount=amount;
        this.paymentMethod=paymentMethod;
    }

    
    
    getAmount(): number{
        return this.amount;
    }

    getPaymentMethod(): string{
        return this.paymentMethod;
    }

    getTransactionInfo(): string{
        return `Payment Details - Method: ${this.getPaymentMethod()}, Amount: $${this.getAmount()}`;
    }

    
}

export {Payment};