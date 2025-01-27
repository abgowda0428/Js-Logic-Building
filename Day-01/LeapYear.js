// Check the Year is Leap Year.

function leapYear(num){
    
if(typeof num === "number"){
    if(num%400===0){
        console.log("Leap Year",true)
    }
    else if(num%100===0){
        console.log("Not Leap Year",false)
    }
    else if(num%4===0){
        console.log("Leap Year",true)
    }
    else{
        console.log("Not Leap Year",false)
    }
}
else{
    throw new Error("Enter Vaild Year");
    
}

}

leapYear(2400);
leapYear(2100)
leapYear("hhhh");