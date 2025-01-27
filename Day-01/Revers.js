// Reversing the String.

// By Using Validation for Input string Only

function reve(value){

    let empty = "";
    if(typeof value == "string"){
        for(let i = value.length-1;i>=0;i--){
            empty += [value[i]]
        }
        return console.log(empty)
    }else{
        throw new Error("Enter the String");
        
    }

};

// By Converting all the Inputs to String

function reve(value){

    let empty = "";
    let Converted = String(value)
    for(let i = Converted.length-1;i>=0;i--){
        empty += [Converted[i]]
    }
    return console.log(empty)

};

// By Using the Array.

function arrSrt(value){
    return console.log(value.split('').reverse().join(""));
}

arrSrt("softwareDevelopment")
reve("hello");
reve("softwraedevelpment")
reve(23455)


 