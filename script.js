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

// Task 5 : changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
const str = 'my-short-string';

function camelize(string) {
  const strSplited = str.split('-'); // ['my', 'short', 'string']
  const firstLetterUppercased = strSplited.map( 
  (arrElem, index) => index == 0 ? arrElem : `${arrElem[0].toUpperCase()}${arrElem.slice(1)}` );
  return firstLetterUppercased.join(''); 
}

const result5 = camelize(str);

// Task 6 : Function that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

function filterRange(arr, a, b) {
  return arr.filter( n => (a <= n && n <= b));
}
const array = [5, 3, 8, 1];

const result6 = filterRange(array, 1, 4);

// Task 7 : function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
const test_arr = [5, 3, 8, 1];

filterRangeInPlace(test_arr, 1, 4);

console.log(test_arr);

function filterRangeInPlace(arr, a, b) {
  for(let i = 0; i < arr.length; i++) {
    if (a <= arr[i] <= b) {
      arr.splice(i, 1);
    }
  }
}