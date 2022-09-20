//1. Write a JavaScript function to generate an array between two integers of 1 step length.
//Input :range(3, 7)
//Expected Output: [3,4, 5, 6, 7]
//Input : range(-4, 7)
//Expected Output: [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]

//this is a function for range of two numbers.
//a is starting number.
//b is ending number.
function range(a, b) 
{
//if a(starting number) is greater than b(ending number).
//print range between smaller to bigger.
if (a > b) {
var arr = new Array(a - b + 1);
//array must be in descending order and a-- condition to decrease a value by -1 and pass in "for" loop
for (var i = 0; i < arr.length; i++,a--){
//element of that new array in arr1.
arr1[i] = a;
}return arr;
// if condition pass ends here.
}
//if a(starting number)is smaller number than b(ending number).
else 
{
var arr2 = new Array(b-a+1);
//array must be in ascending order and a-- condition to increase a value by +1 and pass in "for" loop
for (var i1 = 0; i1 < arr2.length; i1++,a++){
//element of that new array in arr2.
arr2[i1] = a;
}return arr2;
//else condition ends here.
}}
console.log(range(3, 7));
console.log(range(-4, 7));
