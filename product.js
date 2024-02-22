class product{
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

// object declation
const product1 = new product("McBook", 2000, "$");
console.log(product1.getProduct());

const product2 = new product("iPad", 800, "£");
console.log(product2.getProduct());

const product3 = new product("iPhone", 1200, "$");
console.log(product3.getProduct());

