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

const { namee, age, ...rest } = person;

console.log(namee); // 'John Doe'
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
/*
Coding Challenge #1
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
GOOD LUCK 😀 */

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

console.log(game);

const [players1, players2] = game.players; // Destructuring - Smaller Parts
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1; // Rest pattern -- Unpack
console.log(gk, fieldPlayers);

const [gk2, ...fieldPlayers2] = players2; // Rest pattern -- Unpack
console.log(gk2, fieldPlayers2);

const allPlayers = [...players1, ...players2]; // Spread operator - Pack
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']; // Spread operator - Pack
console.log(players1Final);

const { team1, x: draw, team2 } = game.odds; // Destructuring - Smaller Parts
console.log(team1, draw, team2);

const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich'); // Rest parameter syntax

printGoals(
  'Davies',
  'Muller',
  'Lewandowski',
  'Kimmich',
  'Lewandowski',
  'Gnarby'
);
printGoals(...game.scored);

team1 < team2 && console.log('Team 1 is more likely to win'); // Short Circuiting using && Operator
team1 > team2 && console.log('Team 2 is more likely to win');
team1 === team2 && console.log('Draw');

// 7. The for-of Loop // Modern way for using a for loop

const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu2) console.log(item);

// for (const item of menu2.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

for (const [i, j] of menu2.entries()) {
  console.log(`${i + 1}: ${j}`);
}

// 8. Enhanced Object Literals

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours2 = {
  [weekdays[3]]: {
    // Destructuring with Enhanced Object Literals
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// console.log(openingHours2);
const restaurant2 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours2, // Enhanced ES6 Object Literals
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

console.log(restaurant2);

// 9. Optional Chaining (?.)
// restaurant.openingHours.mon // Error
// restaurant.openingHours.mon.open // Error
// restaurant.openingHours.mon?.open // undefined

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Shahid', email: 'shahid@gmail.com' }];
console.log(users[0]?.name ?? 'User array empty');
console.log(users[1]?.name ?? 'User array empty');

// 10. Looping Objects: Object Keys, Values, and Entries

// Property NAMES - Key
const properties = Object.keys(openingHours2);
console.log(properties);
// Property VALUES
const values = Object.values(openingHours2);
console.log(values);

// Entire Object
const entries = Object.entries(openingHours2);
console.log(entries);

// Loop over an Object
for (const [key, { open, close }] of entries) {
  console.log(`On ${key}, we open at ${open} and close at ${close}`);
}

/*
Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names 😉
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}
GOOD LUCK 😀 */

const scored = [...game.scored]; // Loop over an array
for (const [i, player] of scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

const odds = Object.values(game.odds); // Loop over an object
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

// Bonus Challenge that I could'nt solve

// const scorers = Object.values(game.scored);
// console.log(scorers);
// for (const [i, player] of scorers.entries()) {
//   console.log(`${player}: ${i + 1}`);
// }

// Step 1: Create the scorers object
const scorers = {};

// Step 2: Iterate over the scored array to populate the scorers object
for (const player of game.scored) {
  // If the player is already in the scorers object, increment the count
  // Otherwise, add the player to the scorers object with a count of 1
  scorers[player] = (scorers[player] || 0) + 1;
}

// Step 3: Print the scorers object
console.log(scorers);

// 11. Sets

const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(orderSet);

console.log(new Set('Shahid'));

console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
// orderSet.clear();
console.log(orderSet);

for (const order of orderSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

// 12. Maps: Fundamentals

// Using Set and Get Method
const resto = new Map();
resto.set('name', 'Classico Italiano');
resto.set(1, 'Firenze, Italy');
console.log(resto.set(2, 'Lisbon, Portugal'));
// rest.get(1);
console.log(resto.get(1));
// rest.get(2);
console.log(resto.get(2));

resto
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open!')
  .set(false, 'We are closed!');

console.log(resto.get('name'));
console.log(resto.get(true));
console.log(resto.get(1));

const time = 8;
console.log(resto.get(time > resto.get('open') && time < resto.get('close')));

console.log(resto.has('categories'));
resto.delete(2);
console.log(resto);
resto.set(document.querySelector('h1'), 'Heading');
console.log(resto.size);
// rest.clear();
// console.log(rest.size);

const arr2 = [1, 2];
resto.set(arr2, 'Test');
console.log(resto);
console.log(resto.size);

console.log(resto.get(arr2));

// Maps Iteration
const question = new Map([
  ['question', 'What is the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again!'],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours2));
const hoursMap = new Map(Object.entries(openingHours2));
console.log(hoursMap);

// Quiz App
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(question.get(answer === question.get('correct')));

// Convert map to array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);
console.log([...question.entries()]);
// question.clear();
// console.log([...question]);
/*
The Complete JavaScript Course 18
Coding Challenge #3
Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17:
⚽ GOAL
GOOD LUCK 😀*/

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [90, '🔶 Yellow card'],
]);

const events = [...new Set(gameEvents.values())]; // sets
console.log(events);
gameEvents.delete(64); // delete method
console.log(gameEvents);
// console.log(gameEvents.size);
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
// console.log(gameEvents.keys());
// console.log(gameEvents.values());
// console.log(gameEvents.entries());
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}
// console.log(gameEvents);
// console.log(gameEvents.get(17));
// console.log(gameEvents.get(36));
// console.log(gameEvents.get(47));
// console.log(gameEvents.get(61));
// console.log(gameEvents.get(64));

// 13. Working with Strings - Part 1

const airline = 'TAP Air Portugal';
const plane = 'A320';
// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);
console.log(airline.length);
console.log('B737'.length);
// console.log('B737'.charAt(0));
// console.log('B737'.charAt(1));

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));
console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
  else console.log('You got lucky 😎');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// 14. Working with Strings - Part 2

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
// console.log(airline[0].toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAS'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);
// console.log(passenger[0].toUpperCase() + passenger.slice(1));
// console.log(passenger.slice(0, 1).toUpperCase() + passenger.slice(1));
// console.log(passenger.slice(0, 1).toUpperCase() + passenger.slice(1).
// console.log(passenger.slice(0, 1).toUpperCase() + passenger.slice(1).
// console.log(passenger.slice(0, 1).toUpperCase() + passenger.slice(1).
// console.log(passenger.slice(0, 1).toUpperCase() + passenger.slice(1).

// Comparing emails
const email = 'shahid@gmail.com';
const loginEmail = ' Hello.io';
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);
console.log(email === trimmedEmail);

// Replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));

// Regular Expression
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane2 = 'Airbus A320neo';
console.log(plane2.includes('A320'));
console.log(plane2.startsWith('Airb'));
console.log(plane2.endsWith('neo'));

if (plane2.startsWith('Airbus') && plane2.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}
// console.log(plane2.startsWith('Airbus') && plane2.endsWith('neo'));
// console.log(plane2.startsWith('Airbus') || plane2.endsWith('neo'));
// console.log(plane2.startsWith('Airbus') || plane2.endsWith('neo'));
// console.log(plane2.startsWith('Airbus') || plane2.endsWith('neo'));

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

// 15. Working with Strings - Part 3

// Split and Join
console.log('a+very+nice+string'.split('+'));
console.log('Shahid Khan'.split(' '));
// ['a', 'very', 'nice', 'string']
const [firstName, lastName] = 'Shahid Khan'.split(' ');
console.log(firstName, lastName);
// ['Shahid', 'Khan']
const message = 'Add 5 to 5';
console.log(message.split(' '));

const [command, value] = message.split(' ');
console.log(command);

const [firstt, secondd] = 'Shahid Khan'.split(' ');
const newName = ['Mr.', firstt, secondd.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('shahid khan');

// Padding
const message2 = 'Go to gate 23!';
console.log(message2.padStart(25, '+').padEnd(35, '+'));
console.log('Shahid'.padStart(25, '+').padEnd(35, '+'));
// 'Go to gate 23!' -> '   Go to gate 23!' -> '   Go to gate 23!   '

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(4337857583362038));
console.log(maskCreditCard('4337857583362038'));

// Repeat
const message3 = 'Bad weather... All Departures Delayed... ';
console.log(message3.repeat(5));

const planesInline = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};
planesInline(5);
planesInline(3);
planesInline(12);

/*The Complete JavaScript Course 19
Coding Challenge #4
Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅
Hints:
§ Remember which character defines a new line in the textarea 😉
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working 😉
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀 */

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split('_');
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//   }
// });

// 16. String Methods Practice
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)}  (${time.replace(
    ':',
    'h'
  )})`.padStart(36);
  console.log(output);
}

// that's all!
