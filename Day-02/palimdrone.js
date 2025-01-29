// Check the Given String is a Paldrome.

function plaidrome(str){
    let splitStr = str.split("").reverse().join("");
    if(str === splitStr){
        console.log(true);
    }else{
        console.log(false)
    }
    
}

plaidrome("madam")