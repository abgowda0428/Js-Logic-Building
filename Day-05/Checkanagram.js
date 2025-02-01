// Checking the Two string is Anagrams.

function CheckAnagram(firstStr,secondStr){

    firstStr = firstStr.toLowerCase();
    secondStr = secondStr.toLowerCase()

    if(firstStr.length === secondStr.length){

        let f_ASSI = [];
        let s_ASSI = [];

        for(let x=0;x<=firstStr.length-1;x++){
            f_ASSI.push(firstStr.charCodeAt(x));
            s_ASSI.push(secondStr.charCodeAt(x));
        };

        firstassVal = f_ASSI.sort((a,b)=>a - b);
        SecondassVal = s_ASSI.sort((a,b)=>a - b);
        
        final_first_string = String.fromCharCode(...firstassVal);
        final_second_string = String.fromCharCode(...SecondassVal);

        if(final_first_string === final_second_string){
            console.log(`the Given Strings , ${firstStr} and ${secondStr} , are Anagrams.`)
        };
                            
    }else{
        console.log("The Given String are Not Anagram ,Enter According to Condition of Anagram.")
    };

};

CheckAnagram("cat","ACTkk");
CheckAnagram("elbow","Below");
CheckAnagram("earth","EARTH");
CheckAnagram("heart","HEART");
CheckAnagram("pools","SPOOLLL");