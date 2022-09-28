// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
let myFunc = num => Number(num);
var t = userInput[0];
var Arr = Array.from(String(t), myFunc);
let odds = Arr.filter(n=> n%2);

console.log(odds);

  //end-here
});
// next problem
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
var t =userInput[0];
var c = t.toUpperCase();
var d = Array.from(c);
console.log(d);

  //end-here
});
