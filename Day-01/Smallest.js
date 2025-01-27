// Finding the Smallest Number.

// function small(...numbers){
//     return console.log(Math.min(...numbers));
// };

// small(-2,-4,- 3)

// function smallestOfthree(a,b,c){
//     if(typeof a == "number" && typeof b == "number" && typeof c == 'number'){
//         if(a<b && a<c){
//             return console.log(`${a},Is the SmallestOfAll`);
//         }
//         else if(b<a && b<c){
//             return console.log(`${b},Is the SmallestofAll`);
//         }
//         else if(c<a && c<b){
//             return console.log(`${c},Is the SmallestofAll`);
//         }
//         else{
//             return console.log("All are Same Number.")
//         }
//     }
//     else{
//         throw console.error("Enterd values are Not Numbers");
//         ;
//     };
// };

// smallestOfthree(3,4,5);
// smallestOfthree(-1,-2,-9);
// smallestOfthree(3,3,3);
// smallestOfthree(3,4,3);
// smallestOfthree(345,789,12344);
// smallestOfthree("hello",45,"Tagruu");

// function Numbers(a,b,c){
//     if(typeof a == "number" && typeof b == "number" && typeof c == 'number'){

//         let smallest = a;
//         if(b<smallest){
//         smallest = b;
//         return console.log("smallest is B")
//         }
//         else if(c<smallest){
//         smallest = c;
//         return console.log("smallest is C")
//         }
//         else{
//         return console.log("Smallest is A")
//         }

//     }
//     else{
//         throw console.error("Entered Values are Not Numbers");  
//     }
    
// };

// Numbers(3,4,5);
// Numbers(-1,-2,-9);
// Numbers(3,3,3);
// Numbers(3,4,3);
// Numbers(345,789,12344);
// Numbers("hello",45,"Tagruu")


// Array Sorting Method

function arrsort(...numberse){
    return console.log(numberse.sort((a,b)=>
    (a-b)))
};

arrsort(9,7,8,5,6,3,7,10,23,56,)

