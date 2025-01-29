// Generate the MultiPlication of Tables

function Tables(number,till){
   if(number,till <=0){
    throw console.error("Enter the Vaild Number");
   }
   let Table = 0;
   for (let i = 1;i<= till;i++) {
    let Multi = number*i;
    console.log(`Tables of ${number} * ${i} is, ${Multi}`)
   }
}

Tables(2,10);