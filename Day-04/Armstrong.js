// Checking the Number is Armstrong or not.

function Armstrong(num){
   let lenarm = num.toString();
   let lenghtnum = lenarm.length
   let sum = 0;
   
   for(let i = 0;i<=lenghtnum -1;i++){
        let val = Number(lenarm[i]**lenghtnum);
        sum += val;      
   };
   if(sum === num){
    console.log(`The ${num} is Armstrong.`)
   }else{
    console.log(`The ${num} is Not Armstrong.`)
   }
};

Armstrong(153);
Armstrong(123);
Armstrong(9474);
