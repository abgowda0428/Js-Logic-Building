// Function Practise.

// Checking the Number is Odd Or Even.

function OddEven(n){
    if(n%2==0){
        return "Even"
    }else{
        return "Odd"
    }
};

console.log(OddEven(3))

// Calucating Area of Circle.

function AreaOfCircle(Radius){
    let Expontial =Radius*Radius;
    let AreaofCircle = ((Math.PI)*Expontial);
    return Math.floor(AreaofCircle);
};

console.log(AreaOfCircle(5));

// Accept the Array and Return the Sum of Array.

let arr = [1,2,3,4,5,6,7,8,9];

function SumofArr(...Sum){
    let SumValue = 0;
    for(let i =0;i<Sum.length;i++){
          SumValue += arr[i];
    };
    return SumValue;
};

console.log(SumofArr(...arr));

// Check the String Start with Specfic Character.

function CheckString(Value,Char){
    if(Value[0]===Char){
        return true;
    }else{
        return false;
    }
};

console.log(CheckString("Abhi","A"));

// Checking the Maximum of Two Numbers.

function MaxNum(n1,n2){
    return Math.max(n1,n2);
};

console.log(MaxNum(2,3));

// Return the Factorial of Given Number.

function Factorial(Num){
    let sum = 1;
    for(let i = Num;i > 0;i--){
        sum *= i
    };
    return sum;
};

console.log(Factorial(5))

// Accept the String and Return the Reverse of String.

function ReverseString(Value){
    let revStr = Value.split("").reverse().join("");
    return revStr;
};

console.log(ReverseString("abhishek"))

// Check the Max Number in Given Array.

let arrmax = [1,2,3,4,5,6,7,89];

function MaxIndexOfArray(...Num){
    let max =Num[0];
    for(let i = 1;i<= Num.length;i++){
        if(Num[i]>max){
            max = Num[i];
        };
    };
    return max
};

console.log(MaxIndexOfArray(...arrmax));


// Create Function to Log the InputTo that Function.

function Print(Value){
    return Value   
};

console.log(Print("Hello Good Morning"))
console.log(Print("Hello Good Morning"))
console.log(Print("Hello Good Morning"))

// Create a Function that Converts the Normal string to Kabed Case.

function kabedCase(Value){
        return Value.split(" ").join("-");
};

console.log(kabedCase("abhishek gowda h c"));
console.log(kabedCase("Hello Good Morning"));
console.log(kabedCase("My name is Big Peot Tagruu"));