// Initialize an empty array to hold the inventory
let inventory = [];

const productForm = document.querySelector('#product-form');
const productOutput = document.querySelector("#output");

// Input from webpage
let action1 = function (event) {
  event.preventDefault();
  // Ask user for product details
  const name = document.querySelector('#product-name');
  const model = document.querySelector('#product-model');
  const cost = document.querySelector('#product-price');
  const quantity = document.querySelector('#product-amount');

  // Create a product object with the entered details
  let product = {
    productName: name.value,
    productModel: model.value,
    productCost: Number(cost.value),
    productQuantity: Number(quantity.value),
  };

  // Add the product to the inventory array
  inventory.push(product);
  
  let display = " ";
  for (let item of inventory) {
    // alert(`Product Name: ${item['productModel']}`);
    display += `Product Name: ${item['productName']} <br>Product Model: ${item['productModel']} <br>Product Cost: $${item['productCost']} <br> Product Quantity: ${item['productQuantity']} <br><br>`;

  }

  productOutput.innerHTML = display;
};

productForm.addEventListener('submit', action1);

