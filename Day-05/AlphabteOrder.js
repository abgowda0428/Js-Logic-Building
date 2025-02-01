// Checking the Alphabate Order Or Not.

function CheckingAlphabeteOrder(str){
    str = str.toUpperCase();
    let convertASII = [];
    let finalStr = "";
    for(let i =0;i<= str.length -1;i++){
        convertASII.push(str.charCodeAt(i))
    };
    let x = structuredClone(convertASII);
    assASII = x.sort((a,b)=> a-b);
    finalStr += String.fromCharCode(...assASII)
    
    if(str == finalStr){
        console.log(`The Given String, ${str.toLowerCase()} is In Alphabete Order.`)
    }
    else{
        console.log(`The Given String, ${str.toLowerCase()} is Not In Alphabete Order.`)
    }

};

CheckingAlphabeteOrder("abcdabcseaa")