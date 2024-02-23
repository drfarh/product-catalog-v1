import { Product } from "./product.js"
import { Catalog } from "./catalog.js"
import { Person } from "./person.js";
import { Customers } from "./customers.js"


// Product object 
const product1 = new Product("McBook", 2000, "$");
const product2 = new Product("iPad", 800, "£");

// Catalog object
const catalog = new Catalog();
catalog.addProduct(product1);
catalog.addProduct(product2);

// Person object
const person1 = new Person("David", "Kher", "devid@example.com");
const person2 = new Person("Milton", "Hierre", "milton@example.com");

// Customer object
const customers = new Customers();
customers.addCustomer(person1);
customers.addCustomer(person2);

console.log("Catalog:");
catalog.productStore.forEach(product => {
  console.log(product.getProduct());
});

customers.showCustomers();

