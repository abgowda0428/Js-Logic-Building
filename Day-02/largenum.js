// Find the Largest Number in the Array.

function large(...num){
    
    let findLarge = num.sort((a,b)=> (a-b))
    console.log(findLarge.splice(-1).toString());

};

large(23,56,78,98,56,12,34,54,90)
