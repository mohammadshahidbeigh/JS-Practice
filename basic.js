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

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(""));
console.log(Boolean({}));
console.log(Boolean([]));

const money = 0;
if (money) {
  console.log("Don't spend it all 😁");
} else console.log("You should get a job!");

const moneyy = 100;
if (moneyy) {
  console.log("Don't spend it all 😁");
} else console.log("You dont have money");

let height = " ";

if (height) {
  console.log("Yay! Height is defined");
} else console.log("You are too short bz 0 is falsy value");

let heightt;

if (heightt) {
  console.log("Yay! Height is defined");
} else console.log("You are too short bz you are undefined");

// Eighth Basic Program _ Equality Operators: == vs. ===

const length = 20;
if (length == 20) console.log("Its 20");

const width = "20";
if (width === 20) console.log("Its 20 again!");
else console.log("Its not 20");

// const check = Number(prompt("What is your number"));
// if (check !== 30) {
//   console.log("why not 30");
// } else console.log("its 30");

// const checko = prompt("What is your number");
// if (checko !== "30") {
//   console.log("why not 30");
// } else console.log("its 30");

// Ninth Basic Program _ Logical Operators

const hasdrivingLicence = true;
const hasGoodVision = true;
const isTired = true;

if (hasdrivingLicence && hasGoodVision) {
  console.log("Shahid can drive a car");
}
if (hasdrivingLicence || hasGoodVision) {
  console.log("Again Shahid can drive a car");
}
if (hasdrivingLicence && hasGoodVision && !isTired) {
  console.log("Shahid can not drive a car");
} else console.log("Shahid should learn how to drive a car");

/*
The Complete JavaScript Course 7
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK 😀 */

// Data 1

const teamDolphins_avg_Score = (96 + 108 + 89) / 3;
const teamKoalas_avg_Score = (88 + 91 + 110) / 3;

if (teamDolphins_avg_Score > teamKoalas_avg_Score) {
  console.log(`Dolphins win the trophy 🏆`);
} else if (teamDolphins_avg_Score === teamKoalas_avg_Score) {
  console.log(`Match draw`);
} else console.log(`Koalas win the trophy 🏆`);

// Data Bonus 1
const teamDolphins_avg_Score_Bonus1 = (97 + 112 + 101) / 3;
const teamKoalas_avg_Score_Bonus1 = (109 + 95 + 123) / 3;
if (
  teamDolphins_avg_Score_Bonus1 > teamKoalas_avg_Score_Bonus1 &&
  teamDolphins_avg_Score_Bonus1 >= 100
) {
  console.log(`Dolphins win the trophy 🏆`);
} else if (teamDolphins_avg_Score_Bonus1 === teamKoalas_avg_Score_Bonus1) {
  console.log(`Match draw`);
} else console.log(`Koalas win the trophy 🏆`);

// Data Bonus 2
const teamDolphins_avg_Score_Bonus2 = (97 + 112 + 101) / 3;
const teamKoalas_avg_Score_Bonus2 = (109 + 95 + 106) / 3;
if (
  teamDolphins_avg_Score_Bonus2 > teamKoalas_avg_Score_Bonus2 &&
  teamDolphins_avg_Score_Bonus2 >= 100
) {
  console.log(`Dolphins win the trophy 🏆`);
}
if (
  teamDolphins_avg_Score_Bonus2 === teamKoalas_avg_Score_Bonus2 &&
  teamDolphins_avg_Score_Bonus2 >= 100 &&
  teamKoalas_avg_Score_Bonus2 >= 100
) {
  console.log(`Match draw`);
}
if (
  teamDolphins_avg_Score_Bonus2 < teamKoalas_avg_Score_Bonus2 &&
  teamKoalas_avg_Score_Bonus2 >= 100
) {
  console.log(`Koalas win the trophy 🏆`);
}

// Tenth Basic Program _ Switch Statement

const week = "second week";

switch (week) {
  case "first week":
    console.log("1");
    break;
  case "second week":
    console.log("2");
    break;
  case "third week":
    console.log("3");
    break;
  default:
    console.log("Not a valid week");
}

const month = "sixth month";
switch (month) {
  case "first month":
    console.log("1");
    break;
  case "second month":
    console.log("2");
    break;
  default:
    console.log("Not a valid month");
}

// Eleventh Basic Program _ Statements and Expressions

// Statements
// 3 + 4;
// 1991;
// true && false && !true;
// if (23 > 10) {
//   const str = "23 is bigger";
// }
// Expressions
// const me = "Shahida";
// const job = "Developer";
// const birthYearr = 2001;
// const yearr = 2024;
// const shahida =
//   "I'm a " + job + " and I'm " + (yearr - birthYearr) + " years old";

// Twelveth Basic Program _ The Conditional (Ternary) Operator______________________IMPORTANT

const agee = 23;
agee >= 15 ? console.log("I'm an adult") : console.log("I'm a little boy");

const agee1 = 23;
const drink = agee1 >= 18 ? "halal wine 🍷" : "water 💧";
console.log(drink);

const agee2 = 16;
const drink2 =
  agee2 >= 18
    ? `He can drink halal wine bz he is ${agee2} years old`
    : ` He can not drink halal wine bz he is ${agee2} years old`;
console.log(drink2);

// Thirteenth Basic Program _ Coding Challenge #4
/*
The Complete JavaScript Course 8
Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 😉
GOOD LUCK 😀 */

// Data 1
const billvalue1 = 275;
const tip1 =
  billvalue1 >= 50 && billvalue1 <= 300 ? billvalue1 * 0.15 : billvalue1 * 0.2;

console.log(
  `The bill was ${billvalue1}, the tip was ${tip1}, and the total value ${
    billvalue1 + tip1
  }`
);

const billvalue2 = 40;
const tip2 =
  billvalue2 >= 50 && billvalue2 <= 300 ? billvalue2 * 0.15 : billvalue2 * 0.2;
console.log(
  `The bill was ${billvalue2}, the tip was ${tip2}, and the total value ${
    billvalue2 + tip2
  }`
);

// Functions, Arrays, Objects and Loops

// Functions
// Function Declaration
function calcAge1(birthYear1) {
  // birthyear = parameter
  return 2024 - birthYear1;
}
const age1 = calcAge1(2001); // calcAge1 2001 = argument
console.log(age1);

// Function Expression
const calcAge2 = function (birthYear2) {
  return 2024 - birthYear2;
};
const age2 = calcAge2(2001);
console.log(age2);

// Arrow Function
const calcAge3 = (birthYear) => 2024 - birthYear;
const age3 = calcAge3(2001);
console.log(age3);

const yearsUntilRetirement = (birthYear) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  return retirement;
};
console.log(yearsUntilRetirement(2001));

const yearsUntilRetirements = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirements(2001, "Shahid"));
console.log(yearsUntilRetirements(2002, "Shahida"));

// DRY Example Normal Expression Function
const cutFruitPieces = function (fruits) {
  return fruits * 4;
};

const fruitProcessor = function (apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
  return juice;
};

console.log(fruitProcessor(3, 4));

// DRY Exapmle in Arrow Function
const cutFruitPieces2 = (fruits) => fruits * 4;

const fruitProcessor2 = (apples, oranges) => {
  const applePiecess = cutFruitPieces2(apples);
  const orangePiecess = cutFruitPieces2(oranges);
  const juice = `Juice with ${applePiecess} apple pieces and ${orangePiecess} orange pieces`;
  return juice;
};
console.log(fruitProcessor2(2, 3));

/*
JavaScript Fundamentals – Part 2
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores �
GOOD LUCK �
*/
// Data 1
const calcAverageforDolphins = () => {
  return (44 + 23 + 71) / 3;
};
const calcAverageforKoalas = () => {
  return (65 + 54 + 49) / 3;
};

const checkWinner = (avgDolphins, avgKoalas) => {
  const firstone = calcAverageforDolphins(avgDolphins);
  const secondone = calcAverageforKoalas(avgKoalas);
  if (firstone >= 2 * secondone) {
    console.log(`Dolphins win (${firstone} vs. ${secondone})`);
  } else if (secondone >= 2 * firstone) {
    console.log(`Koalas win (${secondone} vs. ${firstone})`);
  } else console.log("No one wins");
};

checkWinner();
// Data 2
const calcAverageforDolphins2 = () => {
  return (85 + 54 + 41) / 3;
};
const calcAverageforKoalas2 = () => {
  return (23 + 34 + 27) / 3;
};

const checkWinner2 = (avgDolphins, avgKoalas) => {
  const firstone = calcAverageforDolphins2(avgDolphins);
  const secondone = calcAverageforKoalas2(avgKoalas);
  firstone >= 2 * secondone
    ? console.log(`Dolphins win (${firstone} vs. ${secondone})`)
    : secondone >= 2 * firstone
    ? console.log(`Koalas win (${secondone} vs. ${firstone})`)
    : console.log("No one wins");
};

checkWinner2();
