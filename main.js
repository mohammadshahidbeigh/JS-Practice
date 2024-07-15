import "./style.css";
import javascriptLogo from "./javascript.svg";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Developers!</h1>
    <h2>Welcome! My name is Shahid.</h2>
    <h3>and this development environment contains JavaScript problem-solving exercises for practice.</h3>
  </div>
`;

// First Basic Program

let Js = "Pro Shahid";
if (Js === "Pro Shahid") alert("Hello Shahid");

console.log(45 + 65 + 80);

// Second Basic Program
