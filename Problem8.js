const prompt = require('prompt-sync')();

//Pert-1: Dice Problem

let Map_dice = new Map();

for(let index =1; index<7;index ++){
    Map_dice.set(index,0);
}

do{
    dice = Math.floor(Math.random()*10)%6+1;
    Map_dice.set(dice,Map_dice.get(dice)+1);


} while(Map_dice.get(dice)<10);

let max = 0, max_dice =0, min =10; min_dice =0;

for(let i = 1;i<7;i++){
    
    if(max < Map_dice.get(i))
    {
        max =  Map_dice.get(i);
        max_dice = i;
    }
    
    if(min > Map_dice.get(i))
    {
        min =  Map_dice.get(i);
        min_dice = i;
    }

}

console.log("The occurence of ",max_dice," is",max," which is Maximum\n","The occurence of ",min_dice," is",min," which is Minimum\n");

//Part-2: Program to get birth month of 50 individuals and find individuals with same birth month

let month  = new Map();

for (let i =1 ; i<13; i++){
    month.set(i,0);
}

for(let i =1;i<51;i++){
    let birth = Math.floor(Math.random()*12)%12 + 1;
    month.set(birth, month.get(birth)+1);
}
for( let i =1; i<13; i++)
console.log("In Month ",i," , ",month.get(i)," People are born");