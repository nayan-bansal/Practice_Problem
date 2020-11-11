const prompt = require('prompt-sync')();

// Part-1: Generate 10 numbers and store them in array and find second maximum and minimum without sorting array
let numberarray = new Array();

for(let index = 0; index<10; index++){
    let number = Math.floor(Math.random()*1000);
    numberarray.push(number);
}

let num_array = numberarray;
let max_index = numberarray.indexOf(Math.max(...numberarray));
let min_index = numberarray.indexOf(Math.min(...numberarray));

numberarray.splice(max_index,1);
numberarray.splice(min_index,1);

let max_index_final = numberarray.indexOf(Math.max(...numberarray));
console.log("The Second Most Maximum value is : ",numberarray[max_index_final]);
let min_index_final = numberarray.indexOf(Math.min(...numberarray));
console.log("The Second Most Minimum value is : ",numberarray[min_index_final]);

//Part-2: Problem 1 using sorting 

numberarray.sort();
console.log("\n");
console.log("The Second Most Maximum value is : ",num_array[num_array.length-1]);
console.log("The Second Most Minimum value is : ",num_array[0]);

//Part-3:  Storing Prime Factor of a number in an array
let prime_array = new Array();
let number = prompt("Enter the number whose prime factors you have to find :");

for(let index =2; index <=number; index++ ){
    if(number%index==0)
    prime_factor(index);
}
function prime_factor(index){
    let flag =0;
    for(let i =2;i<index;i++){
        if(index%i == 0)
        {flag = 1;
            break;}
    }

    if(flag ==0 ||  index ==2)
    prime_array.push(index);
}

console.log(prime_array);

//Part-4: Sum of three Integers = 0

let sum_array = [-1,-2,-3,-4,0,1,2,3,4,5,-8];
let flag = 0;
for(let i = 0;i< sum_array.length; i++){
    for(let j = i+1; j<sum_array.length;j++){
        for(let k = j+1; k<sum_array.length; k++){

            if(sum_array[i]+ sum_array[j] + sum_array[k] == 0)
            {console.log("The Pair is :",sum_array[i],sum_array[j],sum_array[k]);
        flag = 1;
        }
        }  
    }
}
if(flag == 0)
console.log("There are No Pairs");

//Part-5: check repeating digit from 1- 100
console.log("\n");
let number_array = new Array();

for(let index = 1; index<=100; index++){

    if(index%10  == Math.floor(index/10)){
        number_array.push(index);
}
}
console.log(number_array);