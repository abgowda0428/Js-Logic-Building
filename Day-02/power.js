// Generateing the Exponent Power of Given Number

function Expo(number,exponent){
    let newVal = 1;
    for(let i=1;i<=exponent;i++){
       newVal *= number;
    }
    return console.log(`The Exponent Given Number ${number} is, ${newVal}.`);
}

Expo(5,3)