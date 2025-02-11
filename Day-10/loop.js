// Solving about the Loops.

let n = 50;

for(let i = 0;i<=n;i++){
    i = i + 1
    console.log(i)
}

let name1 = "Javascript";

for (const value  of name1) {
    console.log(value)
};

let n2 = 20;

for(let i = 1;i<=n2;i++){
    if(i%2 != 0){
      console.log(i);
    };
}

let n3 = 5;
let factorial = 1;

for(let i = 1;i<=n3;i++){
    factorial *= i;
};

console.log(factorial);

let hold = 1;

for(let i = 1;i<4;i++){
    var str = "";
    for(let j = 1;j<4;j++){
        str+= `${hold}`;
        hold++;
    };
    console.log(str)
};

let arr = [1,2,3,4];
let newarr = [];

for(let i = arr.length - 1;i>= 0;i--){
     newarr.push(arr[i]);
};

console.log(newarr);

let n5 = 100;

for(let i = 1;i<=n5;i++){
    if(i%5 == 0){
        console.log(i);
    };
};

let obj1 = {
    Name : "abhishek",
    age:23,
    city : "Malur",
    Pincode: 563130,
};

for (const key in obj1) {
  console.log(obj1[key])
}

