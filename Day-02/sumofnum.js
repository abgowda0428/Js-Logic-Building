// Give the Sum of Numbers

function sum(n){
  if(n <= 0){
    throw new Error("Enter Valid Number");
  }else{
    let toStr = n.toString();
    let val = toStr.split("");
    let EmptyStr = 0;
    for (const num of val) {
        EmptyStr += parseInt(num);
    }
    return console.log(`The Sum of the ${n}, is ${EmptyStr}` );
  }

}

sum(789)