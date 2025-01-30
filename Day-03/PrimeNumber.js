// Checking the Number is Prime or Not.

function isPrime(num){
    
    if(num<= 1){
        return (`${num}, is Not Prime Number.`)
    }
    for(let i = 2;i<= num;i++){
        if(num%i == 0){
            return (`${num}, is Not Prime Number.`)
        }
        else{
            return (`${num}, is Prime Number.`)
        }
    }
};

console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(5));
console.log(isPrime(4));
console.log(isPrime(6));
console.log(isPrime(8));
console.log(isPrime(7));
console.log(isPrime(11));
console.log(isPrime(13));
console.log(isPrime(17));
console.log(isPrime(19));
