// Counting the Number of Character Occurence in the String.

function countChar(charater){

    charater = charater.toLowerCase()
    lenstr = charater.length;

    for(let i = 0;i<= lenstr -1;i++){
        let sum = 0;
        let countCharater = charater[i];
        
        for(let j = 0;j<= lenstr - 1;j++){
            if(countCharater === charater[j]){
                sum++;
            };
        };
        console.log(`The ${countCharater}, has Repeated ${sum} of Times in the Character ${charater}.`)
    };
};

countChar("Abhishek Gowda H C")