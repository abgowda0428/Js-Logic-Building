// Tip Calculator in JavaScript.

function Tips(Amount,TipPercentage){
    tipAmount = (Amount*(TipPercentage/100));
    console.log(`The Tip Amount For the User IS , ${tipAmount} Rupess.`)
};

Tips(1000,5)