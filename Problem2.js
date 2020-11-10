
const prompt = require('prompt-sync')();

//Part - 1 : Print Number in numeric


let user =prompt("Enter a single digit number: ");

if(user == 0)
console.log("Zero");
else if(user==1){
    console.log("One");
}else if(user==2){
    console.log("two");
}else if(user==3){
    console.log("three");
}else if(user==4){
    console.log("four");
}else if(user==5){
    console.log("five");
}else if(user==6){
    console.log("six");
}else if(user==7){
    console.log("seven");
}else if(user==8){
    console.log("eight");
}else if(user==9){
    console.log("nine");
}else{
    console.log("Entered digit not in range 0-9");
}

// Part- 2: Print the Week Day

let day = Math.floor(Math.random()*10)%7+1;

let weekday = "";

if (day == 1)
        weekday = "Monday";
    else if (day == 2)
        weekday = "Tuesday";
    else if (day == 3)
        weekday = "Wednesday";
    else if (day == 4)
        weekday = "Thursday";
    else if (day == 5)
        weekday = "Friday";
    else if (day == 6)
        weekday = "Saturday";
    else
        weekday = "Sunday";

        console.log("The Day is :",weekday);

//Part - 3: Read 1,10,100 and declare one, ten, hundred, thousand

let num = prompt("Enter the Number: ");
let str = "";
if(num == 1)
str = "One";
else if(num ==10)
str = "Ten";
else if(num == 100)
str = "Hundred";
else if(num == 1000)
str = "Thousand";
else
str = "Pleas enter valid input";
console.log( str);

//Part - 4:  Enter 3 numbers and do arithmetic operation and find the one that is maximum and minimum

let num1 = prompt("Enter First number : ");
let num2 = prompt("Enter Second number : ");
let num3 = prompt("Enter third number : ");
let operation1 = console.log("Operation 1 : ", num1 + num2 * num3);
let operation2 = console.log("Opeartion 2 : ", num3 + num1 / num2);
let operation3 = console.log("Operation 3 : ", num1 % num2 + num3);
let operation4 = console.log("Operation 4 : ", num1 * num2 + num3);
if (num1 > num2 && num1 > num3)
    console.log("Maximum is : ", num1);
else if (num2 > num1 && num2 > num3)
    console.log("Maximum is : ", num2);
else
    console.log("Maximum is : ", num3);
if (num1 < num2 && num1 < num3)
    console.log("Minimum is : ", num1);
else if (num2 < num1 && num2 < num3)
    console.log("Minimum is : ", num2);
else
    console.log("Minimum is : ", num3);