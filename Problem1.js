//Part : 1- Minimum and Maximum of three Numbers

let num1 = Math.floor(Math.random()*1000);
let num2 = Math.floor(Math.random()*1000);
let num3 = Math.floor(Math.random()*1000);

let maximum =0;
let minimum =0;

if(num1> num2 && num1>num3)
maximum = num1;

else if(num2> num1 && num2>num3)
maximum = num2;

else if(num3> num2 && num3>num1)
maximum = num3;


if(num1< num2 && num1 < num3)
minimum = num1;

else if(num2< num1 && num2< num3)
minimum = num2;

else if(num3< num2 && num3< num1)
minimum = num3;

console.log("Minimum out of ", num1, ", ", num2, ", ", num3, " : ", minimum, "\nMaximum out of ", num1, ", ", num2, ", ", num3, " : ", maximum);

//Part -2 : Take day and month from the command line and prints true if day of month is between March 20 and June 20, false otherwise.

console.log("\n");
const prompt = require('prompt-sync')();

let day  = prompt("Enter day of the month : ");
console.log("The Day entered is ",day);
let month = prompt("Enter month of the year : ");
console.log("The Month entered is ",month);

if((day >= 20 && day<=31 && month == 3) || (day >= 1 && day<=30 && month == 4) || (day >= 1 && day<=31 && month == 5) || (day >= 1 && day<=20 && month == 6))
console.log("True");
else
console.log("False");

//Part 3- : Leap year or not
console.log("\n");
let year = prompt("Enter year : ");
console.log("The Year entered is ",year);
if(year%4 == 0 && year>1000){
    if(year%100 !=0)
    console.log("True");
    else if(year%100 == 0 && year %400 == 0)
    console.log("True");
    else
    console.log("False");
}
else
console.log("False");

//Part - 4: Flipping of Coin
console.log("\n");
let coin = Math.floor(Math.random()*10)%2;

if(coin == 1)
console.log("Head");
else
console.log("Tail");