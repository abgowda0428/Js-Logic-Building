// Array Log

const arr = ["Tagruu","Polar","Peot","Pig","BigPeot"];
console.log(arr)
console.log(arr.at(1));

arr.unshift("Shraaa","Abhi");
console.log(arr)

arr.pop();
console.log(arr)

console.log(arr.slice(0,3))
console.log(arr.indexOf("Shraaa"))

console.log(arr.includes("Abhi"))
console.log(arr.includes("ABHI"))

let arr1 = [1,2];
let arr2 = [3,4];
let arr4 = [5,6];

let arr3 = arr1.concat(arr2,arr4);
console.log(arr3)

let arr5 = arr3.reverse();
console.log(arr5)

let assarr = arr5.sort((a,b)=>
    a-b
);

console.log(assarr)

let arr6 = structuredClone(arr5);
console.log(arr6,arr5)
if(arr6 === arr5){
    console.log("Same")
}else{
    console.log("Not same");
}