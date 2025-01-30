// Checking the Number of Voules and Consonents in the String.

function CheckingVoulesAndConsonents(inputstring){

      inputstring = inputstring.toLowerCase();
      inputstring = inputstring.replaceAll(" ","");

      let Voul = "aeiou";
      let Cons = "bcdefghjklmnpqrstvwxyz";

      let countVoul = 0;
      let countConst = 0;
      
      for(let i = 0;i<inputstring.length;i++){
        if(Voul.includes(inputstring[i])){
            countVoul++
        }
        else if(Cons.includes(inputstring[i])){
            countConst++
        }
        else{
            console.log(`This is Either Voule nor Consonents ${inputstring[i]}`)
        }
      }
    return {countVoul,countConst}
     
}

console.log(CheckingVoulesAndConsonents("Hello World"));
console.log(CheckingVoulesAndConsonents("Abhishek Gowda H C"));
console.log(CheckingVoulesAndConsonents("Tagruu Singh Boliya"));
console.log(CheckingVoulesAndConsonents("Hello Tagruu Mike Testing , Hello"));