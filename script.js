import { product } from "./product.js";

// Product object declation
const product1 = new product("McBook", 2000, "$");
console.log(product1.getProduct());

const product2 = new product("iPad", 800, "£");
console.log(product2.getProduct());

const product3 = new product("iPhone", 1200, "$");
console.log(product3.getProduct());
