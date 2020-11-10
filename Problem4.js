const prompt = require('prompt-sync')();

// Part -1: Enter the Power of Two

let input1 = Number(prompt("Enter the Power of Two: "));

for(let index =0; index<=input1; index++){
    console.log("The Powers of Two are: ",Math.pow(2,index));
}

//Part-2: Enter the Sum of Harmonic Series

let input2 = Number(prompt("Enter the term upto Which the terms are to be added: "));

let sum = 0;

for(let index =1; index<=input2; index++){
     
    sum = sum + 1/index;
}

console.log("The Sum of the Series is: ",sum);

//Part-3: To determine a prime Number

let input3 = Number(prompt("Enter the number to be checked: "));
let flag = 0;

for(let index =2; index<input3;index++){
    if(input3%index == 0)
    {
        flag =1;
        break;
    }
}

if(flag == 1)
console.log("The Number is Not Prime");
else
console.log("The Number is Prime");

//Part-4: To Print Prime Numbers in a Range

let lowerRange = Number(prompt("Enter beginning of range for prime numbers : "));
    let upperRange = Number(prompt("Enter end of range for prime numbers : "));
    console.log("Prime numbers between", lowerRange, "and", upperRange);
    for (let number = lowerRange; number <= upperRange; number++) {
        let countForFactor = 0;
        for (let factor = 2; factor < number; factor++) {
            if (number % factor == 0)
                countForFactor++;
        }
        if (countForFactor == 0)
            console.log(number);
    }

//Part-5: Factorial of a Number
let Input4 = Number(prompt("Enter a number to find factorial : "));
    let factorial = 1;
    for (let number = 1; number <= Input4; number++) {
        factorial *= number;
    }
    console.log("Factorial of ", Input4, " : ", factorial);

//Part-6: Factors of a Number
let input = Number(prompt("Enter the Number to be Factorized: "));

for(let index = 1; index * index <= input; index++){
    if(input%index == 0)
    {console.log(index);
    console.log(input/index);}
}