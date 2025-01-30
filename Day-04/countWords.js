// Counting the Number of Words in the Sentence.

function NumWords(inputString){
    let wordCount = 0;
    for(let i = 0;i<=inputString.length;i++){
         if(inputString[i] == " "){
            wordCount ++;
        }
    }return wordCount
};

console.log(NumWords("Hello Tagruu Sing "));
console.log(NumWords("Hello Tagruu Sing you are the King of kall Tagruu "));
console.log(NumWords("Hello Tagruu Sing a a a a a a a a a a a a a a a a a "));
console.log(NumWords("Hello Tagruu Sing , You R big Peot king"));
console.log(NumWords("Hello Tagruu Sing ,You are the Big Tagruu King ,odmma tagruu "));
console.log(NumWords("Hello Tagruu Sing               "))