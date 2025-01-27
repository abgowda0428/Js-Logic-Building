// Checking the Number is Even or Odd.

function Check(n){
    if(n%2 == 0){
        return console.log(`The Given Number is Even,${n}`)
    }
    else{
        return console.log(`The Given Number is Odd,${n}`)
    }
};

function Check_2(n){
    return n % 2 == 0 ? console.log(`${n}, is Even `) : console.log(`${n}, is Odd`);
}

Check_2(78);
Check_2(24);
Check_2(-67);
Check_2(-3);
Check_2(0.98);
Check_2(-0.68);
Check_2(0);
Check_2(-0);