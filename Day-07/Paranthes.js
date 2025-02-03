//Check the Balanced Paranthese of the String.
  
const parantheses = {
    '{': '}',
    '(': ')',
    '[': ']'
}

function isBalanced(inputString) {

    const parantheseArray = [];
    for(let char of inputString) {
        if(parantheses[char]) {
            parantheseArray.push(char);
        }
       else if(char == ")" || char == "}" || char == "]"){
        const lastParas = parantheseArray.pop()
        if(parantheses[lastParas] !== char){
            return false
        }
       }
    }
    return parantheseArray.length === 0 ;
}

console.log('{[()]}', isBalanced('{[()]}'));

console.log('{[(])}', isBalanced('{[(])}'));

console.log('{[]', isBalanced('{[]'));