// Checking the Plaindrome In the Given String.

function CheckPlaindrome(Value) {
    Value = Value.toLowerCase();
    
    let result = [];

    for (let i = 0; i <= Value.length; i++) {
        for (let j = i + 1; j <= Value.length; j++) {
            let Val = Value.slice(i, j);
            let revString = Val.split("").reverse().join("");
            
            if (Val == revString && Val.length > 1) {
                result.push(Val);
            }
        }
    } 

    if (result.length > 0) {
        console.log(`This is Plaindrome Present in the Given String , ${result}.`);
    } else {
        console.log("There is No Planidrome in the Given String.");
    }

    console.log(result);
}

CheckPlaindrome("Madam")