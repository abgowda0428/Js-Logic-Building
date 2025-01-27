// Calucating the Area of Rectangle.

let AR = (l,w)=>{
    if(l <= 0){
        throw new RangeError("Lenght is Negative Number or Zero");
    }
    else if(w <= 0){
        throw new RangeError("Width is Negative Number or Zero");
    }
    else{
        area = (l*w);
        return console.log(`The Area of Rectangle is,${area}.`);
    }

};

AR(23,67);
AR(30,40);
// AR(0,40);
// AR(30,0);
// AR(-30,40);
// AR(30,-40);