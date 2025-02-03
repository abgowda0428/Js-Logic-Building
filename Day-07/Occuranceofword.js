//  Finding the Occurance of Word in Big String.

function Occurance(InputString,FindWord){
    // resArr = [...InputString.matchAll(FindWord)].map((word)=>
    //     word.index)
    // console.log(resArr)

    result = [];
    sum = 0;
    IndexofWord = InputString.indexOf(FindWord);
 
    while(IndexofWord!= -1){
       result.push(IndexofWord);
       IndexofWord = InputString.indexOf(FindWord, IndexofWord+1);
       sum ++
    }

    console.log(result, `The Words are Present , ${sum} Times In the Sentence.`)

};

Occurance("This is a big string with the word big repested in the big string.","big");
Occurance("This is a big string with the word big repested in the big string.","string");
Occurance("This is a big string with the word big repested in the big string.","the");