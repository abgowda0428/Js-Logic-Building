//  Finding the Occurance of Word in Big String.

function Occurance(InputString,FindWord){
    // resArr = [...InputString.matchAll(FindWord)].map((word)=>
    //     word.index)
    // console.log(resArr)

    result = [];
    IndexofWord = InputString.indexOf(FindWord);
 
    while(InedxofWord!= -1){
       result.push(InedxofWord);
       IndexofWord = InputString.indexOf(FindWord, IndexofWord+1);
    }

    console.log(result)

};

Occurance("This is a big string with the word big repested in the big string.","big");
Occurance("This is a big string with the word big repested in the big string.","string");
Occurance("This is a big string with the word big repested in the big string.","the");