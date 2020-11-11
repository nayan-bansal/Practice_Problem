const prompt = require('prompt-sync')();

//Part-1: Function for Celcius/Farheneit Conversion

console.log("Choice\n1. Celsius to Fahrenheit\n2. Fahrenheit to Celsius");
let userChoice = Number(prompt("Enter choice for conversion : "));
switch (userChoice) {
    case 1:
        let celsiusTemp = Number(prompt("Enter celsius temperature to covert to Fahrenheit : "));
        if (celsiusTemp >= 0 && celsiusTemp <= 100) {
            let temperature = celsiusToFahrenheit(celsiusTemp);
            console.log(celsiusTemp, "degC in fahrenheit :", temperature, "degF");
            break;
        }
        else
            break;
    case 2:
        let fahrenheitTemp = Number(prompt("Enter fahrenheit temperature to covert to Celsius : "));
        if (fahrenheitTemp >= 32 && fahrenheitTemp <= 212) {
            let temperature = fahrenheitToCelsius(fahrenheitTemp);
            console.log(fahrenheitTemp, "degF in Celsius :", temperature, "degC");
            break;
        }
        else
            break;
    default:
        console.log("Wrong Choice!");
        break;
    }
    // function to convert from celsius to fahrenheit
    function celsiusToFahrenheit(celsiusTemp) {
        return (celsiusTemp * 9 / 5) + 32;
    }
    //  function to convert from fahrenheit to celsius
    function fahrenheitToCelsius(fahrenheitTemp) {
        return (fahrenheitTemp - 32) * 5 / 9;
    }

//Part-2: Palinfrome Function
let Input = Number(prompt("Enter a number to check if it is a palindrome : "));
    let isPalindrome = checkForPalindrome(Input);
    if (isPalindrome)
        console.log(Input, "is Palindrome.");
    else
        console.log(Input, "is not Palindrome.");

    // function to check for palindrome
    function checkForPalindrome(Input) {
        let tempInput = Input;
        let reverseNum = 0;
        while (Input > 0) {
            reverseNum = reverseNum * 10 + Input % 10;
            Input = Math.floor(Input / 10);
        }
        if (reverseNum == tempInput)
            return true;
        else
            return false;
    }

//PArt-3: To check No. is Prime and its palimdrome is also prime
let userInput = Number(prompt("Enter a number : "));
    let isPrime = checkForPrime(userInput);
    if (isPrime) {
        let reverseOfNumber = getPalindrome(userInput);
        let isPalindromePrime = checkForPrime(reverseOfNumber);
        if (isPalindromePrime)
            console.log(userInput, " and palindrome ", reverseOfNumber, " are prime.");
        else
            console.log(userInput, " is prime, whereas palindrome", reverseOfNumber, "is not prime");
    }
    else
        console.log(userInput, "is not prime");
    
    // Function to check for prime number
    function checkForPrime(number) {
        let count = 0;
        for (let factor = 2; factor < number; factor++) {
            if (number % factor == 0)
                count++;
        }
        if (count == 0)
            return true;
        else
            return false;
    }

    // Function to get palindrome
    function getPalindrome(number) {
        let reverseNum = 0;
        while (number > 0) {
            reverseNum = reverseNum * 10 + number % 10;
            number = Math.floor(number / 10);
        }
        return reverseNum;
    }