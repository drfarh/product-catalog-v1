export class product{
    //create constructor method
    constructor(name, price, currency){
        this.name = name;
        this.price = price;
        this.currency = currency;
    }

    //create get method
    getProduct(){
        return `Product Name: ${this.name} and price: ${this.currency}${this.price}`;
    }
}


