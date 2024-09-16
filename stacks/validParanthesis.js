// Check if the given string containing characters, are valid paranthesis.
// Input : "()" ->>> Output = True
// Input : "()[]{}" ->>> Output = True
// Input : "({]" ->>> Output = False

const validParanthesis = (str)=>{
    let stack = [];
    for(let i = 0; i < str.length; i++){
        const char = str[i];
        if(char === "(" || char === "{" || char === "["){
            stack.push(char);
        }
        else if(char === ")" || char === "}" || char === "]"){
            if(isEmpty(stack)){
                return false;
            }
            const top = stack.pop();
            if(
                (char === ")" && top !== "(") ||
                (char === "]" && top !== "[") ||
                (char === "}" && top !== "{")
            ){
                return false;
            }
        }
    }
    return isEmpty(stack);
}
const isEmpty = (stack)=>{
    return stack.length === 0;
}

console.log(validParanthesis("(()){}"));