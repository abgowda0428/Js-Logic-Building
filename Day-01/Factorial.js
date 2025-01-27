// Calucate the Factorial of Given.

function fact(n){

    if(n>=0 && typeof n === "number"){

        let res = 1;
        for(i = 1;i<=n;i++){
          res *=  i;  
        }
        return console.log(`The Factorila of Given Number, ${n}! is ${res}`);
        
    }
    
    else{
        throw new Error("Enter Positive Intergers"); 
    }
    
}

fact(8);
fact(10);