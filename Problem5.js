const prompt = require('prompt-sync')();

//Part-1: While Loop Problems

let index = Number(prompt("Enter the Power of Two: "));

while(index>=0){
    console.log("The Powers of Two are: ",Math.pow(2,index));
    index--;
}

//Part-2: Magic Number Problem

let number = prompt("Enter the number  between 1 to 100 :");
console.log(number);
let mid = number/2;
let start = 0;
let end = 100;
while (mid != number) {
    if (mid == number)
        console.log("Number is: " + mid);
    else if (mid > number) {
        end = mid;
        mid = Math.floor((start + end) / 2);
    }
    else if (mid < number) {
        start = mid;
        mid = Math.floor((start + end) / 2);
    }
}
console.log(mid);

//Part-3: Head and Tail Problem

let toss = Math.floor(Math.random() * 10) % 2;

let headcount = 0;
let tailcount =0;

while(tailcount != 11 && headcount !=11){
    if(toss == 1)
    tailcount++;
    else
    headcount++;
}
if(headcount == 1)
console.log("Head Wins!!");
console.log("Tail Wins");

//Part-4: Gambler Problem

let win_gamble = 1;
let loose_gamble =0;

let initial_money = 100;

while (initial_money<1 && initial_money >=100){
    let outcome = Math.floor(Math.random() * 10) % 2;

    if(outcome == wim_gamble)
    initial_money++;
    else
    initial_money--;
}
if(initial_money == 0)
console.log("Alll Money Lost");
else
console.log("Money Doubled");