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

// Functions - Higher order functions, bind methods and A Closer Look at Functions

/*
What is functional programming in javascript and what are the topics it includes
ChatGPT
Functional programming in JavaScript is a programming paradigm where functions are treated as first-class citizens, meaning they can be assigned to variables, passed as arguments, and returned from other functions. This paradigm emphasizes the use of pure functions, immutability, and higher-order functions to build more predictable and maintainable code.

Here are some key concepts and topics associated with functional programming in JavaScript:

1. Pure Functions
Definition: A pure function is a function that, given the same inputs, always returns the same output and has no side effects.
Example:
javascript
Copy code
const add = (a, b) => a + b;
2. Immutability
Definition: Immutability means that data cannot be modified after it is created. Instead, new data structures are created from existing ones.
Example:
javascript
Copy code
const arr = [1, 2, 3];
const newArr = [...arr, 4];  // arr is not modified
3. Higher-Order Functions
Definition: Functions that operate on other functions, either by taking them as arguments or by returning them.
Example:
javascript
Copy code
const map = (arr, fn) => arr.map(fn);
4. First-Class Functions
Definition: Functions are treated as first-class citizens, meaning they can be stored in variables, passed as arguments, and returned from other functions.
Example:
javascript
Copy code
const greet = () => 'Hello';
const sayHello = greet;
console.log(sayHello());  // 'Hello'
5. Function Composition
Definition: Combining two or more functions to produce a new function.
Example:
javascript
Copy code
const compose = (f, g) => (x) => f(g(x));
const addOne = (x) => x + 1;
const double = (x) => x * 2;
const addOneAndDouble = compose(double, addOne);
console.log(addOneAndDouble(2));  // 6
6. Currying
Definition: Transforming a function that takes multiple arguments into a series of functions that each take a single argument.
Example:
javascript
Copy code
const add = (a) => (b) => a + b;
const addFive = add(5);
console.log(addFive(3));  // 8
7. Recursion
Definition: A function that calls itself to solve smaller instances of the same problem.
Example:
javascript
Copy code
const factorial = (n) => n === 0 ? 1 : n * factorial(n - 1);
console.log(factorial(5));  // 120
8. Declarative Programming
Definition: Writing code that expresses the logic of a computation without describing its control flow.
Example:
javascript
Copy code
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(n => n % 2 === 0);
9. Side Effects
Definition: Any operation that modifies some state or interacts with the outside world (e.g., logging, modifying a global variable).
Example:
javascript
Copy code
let count = 0;
const increment = () => count += 1;  // has a side effect on `count`
10. Laziness
Definition: Delaying the evaluation of an expression until its value is needed.
Example:
javascript
Copy code
const lazy = () => {
  console.log('Evaluated');
  return 42;
};
const x = lazy;  // `lazy` is not called here
console.log(x());  // 'Evaluated' and then 42
11. Functors and Monads
Definition: Structures that represent computations. Functors allow for the application of functions over wrapped values, and Monads provide a way to chain computations together.
Example (Functor):
javascript
Copy code
const array = [1, 2, 3];
const mappedArray = array.map(x => x * 2);  // Array is a functor
Example (Monad):
javascript
Copy code
const promise = Promise.resolve(42);
promise.then(x => x + 1).then(console.log);  // Promise is a monad
These topics form the foundation of functional programming in JavaScript, promoting code that is more predictable, easier to test, and more modular.
*/
