//Part -1: Use of Switch Case to Print Number in Words

const prompt = require('prompt-sync')();

let num = Math.floor(Math.random() * 10) % 10;
let Word = "";
switch (num) {
    case 0:
        Word = "zero";
        break;
    case 1:
        Word = "one";
        break;
    case 2:
        Word = "two";
        break;
    case 3:
        Word = "three";
        break;
    case 4:
        Word = "four";
        break;
    case 5:
        Word = "five";
        break;
    case 6:
        Word = "six";
        break;
    case 7:
        Word = "seven";
        break;
    case 8:
        Word = "eight";
        break;
    case 9:
        Word = "nine";
        break;
    default:
        Word = "ERROR!";
}
console.log(num, " in word :", Word);


//Part -2 : Week Day in Word using Switch Case

let weekDay = "";
    let num2 = Math.floor(Math.random() * 10) % 7 +1;
    switch (num2) {
        case 1:
            weekDay = "Monday";
            break;
        case 2:
            weekDay = "Tuesday";
            break;
        case 3:
            weekDay = "Wednesday";
            break;
        case 4:
            weekDay = "Thursday";
            break;
        case 5:
            weekDay = "Friday";
            break;
        case 6:
            weekDay = "Saturday";
            break;
        case 7:
            weekDay = "Sunday";
            break;
        default:
            weekDay = "ERROR!";
    }
    console.log(num2, " is :", weekDay);

// Part -3 : Print 1,10,100,1000.. in words using Switch-Case

let str = "";
    let num3 = Number(prompt("Enter the Number :"));
    switch (num3) {
        case 1:
            str = "One";
            break;
        case 10:
            str = "Ten";
            break;
        case 100:
            str = "Hundred";
            break;
        case 1000:
            str = "Thousand";
            break;
        default:
            str = "Invalid Input";
    }
    console.log(num3, " in Words is :",str );

//Part - 4: Do Different Unit Conversions

console.log("1. Feet to inch\n2. inch to Feet \n3. Feet to meter\n4. Meter to feet");
    let Choice = Number(prompt("Enter your choice : "));
    let Input = Number(prompt("Enter number for unit conversion : "));
    switch (Choice) {
        case 1:
            console.log(Input, " feet in inch : ", Input * 12, " inch");
            break;
        case 2:
            console.log(Input, "inch in feet : ", Input * 0.083, " feet");
            break;
        case 3:
            console.log(Input, " feet in m : ", Input * 0.304, " m");
            break;
        case 4:
            console.log(Input, " m in feet : ", Input * 3.28, " feet");
            break;
        default:
            console.log("Wrong choice!");
    }