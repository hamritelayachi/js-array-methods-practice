// Task: Get the names of products that are in stock and cost less than 500.
const products = [
  { id: 1, name: "Laptop", price: 1200, qty: 2, inStock: true,  category: "tech" },
  { id: 2, name: "Phone",  price: 800,  qty: 0, inStock: false, category: "tech" },
  { id: 3, name: "Desk",   price: 300,  qty: 5, inStock: true,  category: "home" },
  { id: 4, name: "Lamp",   price: 50,   qty: 10, inStock: true, category: "home" },
  { id: 5, name: "Mouse",  price: 25,   qty: 20, inStock: true, category: "tech" },
];

const isInStock = p => p.inStock === true;
const isLowCost = p => p.price < 500;
const getName = p => p.name;

const result = products.filter(isInStock).filter(isInStock).map(getName);

console.log(result);
