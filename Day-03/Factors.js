// Finding the Factors of Given Number.


function factor(n){
    let facarr = [];
    for(let i =1 ;i <=n;i++){
      if(n%i == 0){
        facarr.push(i);
      }
    }
    console.log(facarr)

};

factor(10);
factor(35);
factor(14);
factor(4);