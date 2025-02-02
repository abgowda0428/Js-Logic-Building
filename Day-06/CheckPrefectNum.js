// Checking the Entered Number is Perfect Number are Not.

function PrefectNum(Num){

    let numArr = [];
    let sum = 0;

    for(let i = 0;i<Num;i++){
       if(Num % i == 0){
        numArr.push(i);
       }
    };

    for(let j = 0;j<=numArr.length - 1;j++){
        sum += numArr[j]
    };
    
    if(Num === sum){
        console.log(`Entered Number ${Num} , Is Prefect Number.`)
    }else{
        console.log(`The Entered Number ${Num} , Is Not Prefect Number.`)
    }
    
};

PrefectNum(28);
PrefectNum(6);
PrefectNum(30);
PrefectNum(496);
PrefectNum(8128);
PrefectNum(50);
PrefectNum(99);
