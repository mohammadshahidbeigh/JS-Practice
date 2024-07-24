import './style.css';
import javascriptLogo from './javascript.svg';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Developers!</h1>
    <h2>Welcome! My name is Shahid.</h2>
    <h3>This development environment contains JavaScript problem-solving exercises for practice.</h3>
  </div>
`;

// Data Structures, Modern Operators and Strings
// 1. Destructuring Arrays
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // Passing an object to the function for fast destructuring
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const [first, , second] = restaurant.categories;
console.log(first, second);

// Switching variables
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
console.log(restaurant.order(2, 0));
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r);

// Destructuring objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open, close },
  //   fri: { open: o, close: c },
} = openingHours;
console.log(open, close);
// console.log(o, c);

// calling the object in the function
restaurant.orderDelivery({
  address: 'Via del Sole, 21',
});

// 2. The Spread Operator (...)
const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array - A shallow Copy
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join 2 arrays
const menuNew = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menuNew);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Shahid';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
//console.log`${...str} Kuchbhi');

// Real-world example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// restaurant.orderPasta(...ingredients);

// Objects - Not plain object by the way!
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Shahid' };
console.log(newRestaurant);

// Copy array - A shallow Copy
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

// 3. Rest Pattern and Parameters

// With Arrays
const array = [1, 2, 3, 4, 5];
const [firsty, secondy, ...resty] = array;

console.log(firsty); // 1
console.log(secondy); // 2
console.log(resty); // [3, 4, 5]

// With Object
const person = {
  name: 'John Doe',
  age: 30,
  profession: 'Developer',
  country: 'USA',
};

const { nam, age, ...rest } = person;

console.log(nam); // 'John Doe'
console.log(age); // 30
console.log(rest); // { profession: 'Developer', country: 'USA' }

// With Functions - Exactly opposed to the spread operator
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

// With function inside the object above
restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');

// 4. Short Circuiting (&& and || operators)

console.log('---- OR ----');
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Shahid');
console.log('' || 'Shahid');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---- AND ----');
console.log(0 && 'Shahid');
console.log(7 && 'Shahid');

console.log('Hello' && 23 && null && 'Shahid');

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');
}

restaurant.orderPizza &&
  restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');

// 5. Nullish Coalescing Operator (??)
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

// 6. Logical Assignment Operators

// Logical AND Assignment (&&=)

let ax = true;
let by = false;

ax &&= true; // a = true (a is already true, so it stays true)
by &&= true; // b = false (b is false, so it stays false)

console.log(ax); // true
console.log(by); // false

// Logical OR Assignment (||=)

let axx = false;
let byy = 0;
let cz = null;

axx ||= true; // a = true (a is false, so it becomes true)
byy ||= 42; // b = 42 (b is falsy, so it becomes 42)
cz ||= 'default'; // c = "default" (c is null, so it becomes "default")

console.log(axx); // true
console.log(byy); // 42
console.log(cz); // "default"

// Logical Nullish Assignment (??=)

let axxx = null;
let byyy = undefined;
let c = 0;

axxx ??= 'default'; // a = "default" (a is null, so it becomes "default")
byyy ??= 'default'; // b = "default" (b is undefined, so it becomes "default")
c ??= 42; // c = 0 (c is not null or undefined, so it stays 0)

console.log(axxx); // "default"
console.log(byyy); // "default"
console.log(c); // 0
