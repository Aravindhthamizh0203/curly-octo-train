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
 var a=parseInt(userInput[0]);
 var b=[1,3,5,7,8,10,12];
 var c=[4,6,9,11];
 if (a==0){
    console.log("Error");
 }
 else if(a in b){
    console.log(31);
 }
 else if(a in c){
    console.log(30);
 }
 else if(a==2){
    console.log(28);
 }
 else{
    console.log("Error");
 }
});
