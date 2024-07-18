import "./style.css";
import javascriptLogo from "./javascript.svg";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Developers!</h1>
    <h2>Welcome! My name is Shahid.</h2>
    <h3>This development environment contains JavaScript problem-solving exercises for practice.</h3>
  </div>
`;

// First Basic Program

let Js = "Pro Shahid";
// if (Js === "Pro Shahid") alert("Hello Shahid");

console.log(45 + 65 + 80);

// Second Basic Program _ Data Types
// Number , String , Boolean , Undefined , Null , Symbol, BigInt.

let firstNum = 27;
console.log(firstNum);
console.log(typeof firstNum);

let secondString = "27";
console.log(secondString);
console.log(typeof secondString);

const thirdBoolean = true;
console.log(thirdBoolean);
console.log(typeof thirdBoolean);

let fourthUndefined;
console.log(fourthUndefined);
console.log(typeof fourthUndefined);

let fifthNull = null;
console.log(fifthNull);
console.log(typeof fifthNull);

const sixthSymbol = Symbol("Shahid");
console.log(sixthSymbol);
console.log(typeof sixthSymbol);

const seventhBigInt = 1234567890123456789012345678901234567890n;
console.log(seventhBigInt);
console.log(typeof seventhBigInt);

// Third Basic Program _ Operators

const firstName = "Moahmmad";
const lastName = "Shahid";
console.log(firstName + " " + lastName);

let x = 20;
let y = 10;
console.log(x - y);
console.log(x * y);
console.log(x / y);

const Now = 2024;
const agaBorn = 2001;
console.log(Now - agaBorn);

const ageNow = 2024;
const ageShahid = ageNow - 2001;
const ageShahida = ageNow - 2002;
console.log(ageShahid, ageShahida);
console.log(ageShahida > ageShahid);
console.log(ageShahida < ageShahid);
console.log(ageShahida === ageShahid);

const isFullage = ageShahida >= 18;
console.log(isFullage);

/*
JavaScript Fundamentals – Part 1
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK 😀 */

// solution for Data 1

const marksMass = 78;
const marksHeight = 1.69;

const johnsMass = 92;
const johnsHeight = 1.95;

console.log(marksMass, marksHeight);
console.log(johnsMass, johnsHeight);

const marksBMI = 78 / (1.69 * 1.69);
console.log(marksBMI);

const johnsBMI = 92 / (1.95 * 1.95);
console.log(johnsBMI);

const markHigherBMI = marksBMI > johnsBMI;
console.log(markHigherBMI);

// solution for Data 2

const marksMass_2 = 95;
const marksHeight_2 = 1.88;

const johnsMass_2 = 85;
const johnsHeight_2 = 1.76;

console.log(marksMass_2, marksHeight_2);
console.log(johnsMass_2, johnsHeight_2);

const marksBMI_2 = 95 / (1.88 * 1.88);
console.log(marksBMI_2);
const johnsBMI_2 = 85 / (1.76 * 1.76);
console.log(johnsBMI_2);

const markHigherBMI_2 = marksBMI_2 > johnsBMI_2;
console.log(markHigherBMI_2);

// Fourth Basic Program _ Strings and Template Literals ES6

const realname = "Shahid";
const role = "Developer";
const birthYear = 2001;
const year = 2024;

const shahid =
  "Hi! My name is" +
  " " +
  realname +
  " and  my job " +
  " is a " +
  role +
  " and " +
  "my birthyear is" +
  " " +
  birthYear +
  " and now in " +
  year;
console.log(shahid);

const shahidtemps = `Hi! My name is ${realname} and my job is a ${role} and my birthyear is ${birthYear} and now in ${year}`;
console.log(shahidtemps);

console.log(`Just a regular string...`);
console.log(`String \n with \n a \n new \n line`);
console.log(`String with
multiple
lines`);

// Fifth Basic Program _ If / Else Statements

const age = 9;
const ageRequired = 18;

if (age >= ageRequired) {
  console.log(`You are eligible for driving a Bugatti 🚗`);
} else console.log(`You are eligible for driving a Cycle 🚲😁`);

const love = "1billion";
const loveRequired = "1Billion";

if (love === loveRequired) {
  console.log(`You are eligible for marriage 💍`);
} else console.log(`Work Harder to Become Billionare⚡`);

/*
The Complete JavaScript Course 6
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉
GOOD LUCK */

// solution for Data 1

const marksMasss = 78;
const marksHeightt = 1.69;

const johnsMasss = 92;
const johnsHeightt = 1.95;

console.log(marksMasss, marksHeightt);
console.log(johnsMasss, johnsHeightt);

const markssBMI = marksMasss / (marksHeightt * marksHeightt);
console.log(markssBMI);
const johnssBMI = johnsMasss / (johnsHeightt * johnsHeightt);
console.log(johnssBMI);

if (markssBMI > johnssBMI) {
  console.log(`Marks BMI ${markssBMI} is higher than Johns BMI ${johnssBMI}`);
} else console.log(`Johns BMI ${johnssBMI} is higher than Marks ${markssBMI}`);

// solution for Data 2

const marrksMasss = 95;
const marrksHeightt = 1.88;

const joohnsMasss = 85;
const joohnsHeightt = 1.76;

console.log(marrksMasss, marrksHeightt);
console.log(joohnsMasss, joohnsHeightt);

const marrkssBMI = marrksMasss / (marrksHeightt * marrksHeightt);
console.log(marrkssBMI);
const joohnssBMI = joohnsMasss / (joohnsHeightt * joohnsHeightt);
console.log(joohnssBMI);

if (marrkssBMI > joohnssBMI) {
  console.log(`Marks BMI ${marrkssBMI} is higher than Johns BMI ${joohnssBMI}`);
} else
  console.log(`Johns BMI ${joohnssBMI} is higher than Marks ${marrkssBMI}`);

// Sixth Basic Program _ Type Conversion and Coercion

const numi = "36";
console.log(numi);
console.log(typeof numi);
console.log(Number(numi));
console.log(typeof Number(numi));

const namu = 36;
console.log(namu);
console.log(typeof namu);
console.log(String(namu));
console.log(typeof String(namu));

// type coercion

const typo = "44";

console.log(`I'm typo a ${typo} years old`);
console.log("I'm 36" + typo + 84);
console.log("I'm 44" - "36");
console.log("23" - 9 - "10");
console.log(24 / 2);

let n = "1" + 1;
n = n - 1;
console.log(n);

// Seventh Basic Program _ Truthy and Falsy Values
