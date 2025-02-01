// Solve Matrix Transpose Problem. 

function Matrix(Value){
    let res = [];
    for(let i = 0;i<= Value.length-1;i++){
        for(let j = 0;j<=Value[0].length-1;j++){
            if(!res[j]){
                res [j] = []
            }
            res [j][i] = Value[i][j];
        }
    }
    console.log(res)
};

let Martixarr = [[3,4,8],[5,6,9]]

Matrix(Martixarr)