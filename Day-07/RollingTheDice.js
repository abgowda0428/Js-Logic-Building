// Rolling the Dice.

const prompt = require('prompt-sync')();

let ResultDice = [];

function RollingDice(NumDice,NumSides){
    for(let i = 1;i<=NumDice;i++){
        ResultDice.push((Math.floor((Math.random()*NumSides)+1)));
    }

    console.log(ResultDice);
     
};

const NumberOfDice = prompt("Enter the Number of Dices :")
const NumberOfSides = prompt("Enter the Number of Sides in Dices :")

RollingDice(NumberOfDice,NumberOfSides);