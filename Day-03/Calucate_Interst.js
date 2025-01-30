// Calucate the Interst of Given Principle Amount with Time.

function CalInterst(amt,time,interst){
    let interst_amount = (amt*time*interst)/100
    return (`The Interst Amount you Should Pay is,${interst_amount}`);
};

console.log(CalInterst(1000,5,1));
console.log(CalInterst(20000,10,5));