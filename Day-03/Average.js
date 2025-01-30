// Print the Average of Set of Numbers.

function Average(...num){
      let sum = 0;
      for(let i=0;i<= num.length -1 ;i++){
        sum = sum + Number(num[i]);
      }
      return (sum / num.length);
};

console.log(Average(2,4,6,8,10));
console.log(Average(1,2,3,4,5,6,7,8,9,10));
console.log(Average(1,3,5,7,9));