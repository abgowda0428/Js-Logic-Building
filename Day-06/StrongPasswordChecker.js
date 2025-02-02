// Strong Password Checker.

function CheckStrongPassword(Password){

    Password = Password.trim();

    let LowerCaseAlphabate = "abcdefghijklmnopqrstuvwxyz";
    let UpperCaseAlphabate = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let NumforCheck = "1234567890";
    let SymbolsforCheck = "~!@#$%^&*"

    let LowerCaseAlphabateisPresent = false;
    let UpperCaseAlphabateisPresent = false;
    let NumforCheckisPresent = false;
    let SymbolsforCheckisPresent = false;
    
    if(Password.length > 8){

        for(let char of Password){
            if(LowerCaseAlphabate.includes(char)){
                LowerCaseAlphabateisPresent = true;
            }
            else if(UpperCaseAlphabate.includes(char)){
                UpperCaseAlphabateisPresent = true;
            }
            else if(NumforCheck.includes(char)){
                NumforCheckisPresent = true;
            }
            else if(SymbolsforCheck.includes(char)){
                SymbolsforCheckisPresent = true;
            }
        }

        if(LowerCaseAlphabateisPresent && UpperCaseAlphabateisPresent && NumforCheckisPresent && SymbolsforCheckisPresent === true){
            console.log("This is Strong Password.")
        }
        else{
            console.log("This is Not Strong Password.")
        }
    }
    else{
        console.log("Password Must Contain Atleast 8 Characters.")
    };

};

CheckStrongPassword("Abhishek@123")