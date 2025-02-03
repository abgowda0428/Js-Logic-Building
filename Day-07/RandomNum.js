// Generate the Random Number On the User Input. 

function GenerateRandomNumber(Num){
   console.log(Math.floor((Math.random()*Num)+1))
    
   let i = 0;
   while(i< 50){
    console.log(Math.floor((Math.random()*Num)+1));
    i++;
   }

//    For Min and Max Random.
//  console.log(Math.floor(Math.random()*((MaxNumber - MinNumber) + MinNumber)))

};

GenerateRandomNumber(100);