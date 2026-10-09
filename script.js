const products = [
  { id: 1, name: "Laptop", price: 1200, qty: 2, inStock: true,  category: "tech" },
  { id: 2, name: "Phone",  price: 800,  qty: 0, inStock: false, category: "tech" },
  { id: 3, name: "Desk",   price: 300,  qty: 5, inStock: true,  category: "home" },
  { id: 4, name: "Lamp",   price: 50,   qty: 10, inStock: true, category: "home" },
  { id: 5, name: "Mouse",  price: 25,   qty: 20, inStock: true, category: "tech" },
];

// Task 1 : Get the names of products that are in stock and cost less than 500.
const isInStock = p => p.inStock === true;
const isLowCost = p => p.price < 500;
const getName = p => p.name;
const result1 = products.filter(isInStock).filter(isInStock).map(getName);

// Task 2 : Total value of tech products in stock
const getTechProducts = p => p.category === "tech";
const calcTotalTechProducts = (total, current) => total + current.price * current.qty;
const result2 = products.filter(getTechProducts).filter(isInStock).reduce(calcTotalTechProducts, 0);

// Task 3 : Validate the store
const hasPositivePrice = p => p.price > 0;
const isOutOfStock = p => p.inStock === false;
const result3 = products.every(hasPositivePrice) ? products.filter(isOutOfStock).map(getName) : [];


// Task 4 : Sum of tripled even numbers
const nums = [1, 2, 3, 4, 5, 6, 7];
const isEven = n => n % 2 === 0;
const tripleEvenNumber = n => n * 3;
const calcTotal = (total, current) => total + current;
const result4 = nums.filter(isEven).map(tripleEvenNumber).reduce(calcTotal);

