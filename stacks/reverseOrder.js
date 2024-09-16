// Reverse the order of input words

const reverseOrder = (str)=>{
    const splittedStr = str.split(/\s+/);
    const stack = [];

    for(let i of splittedStr){
        stack.push(i);
    };
    let finalStr = "";
    while(stack.length){
        const current = stack.pop();
        if(current){
            finalStr += " " + current;
        }
    }
    return finalStr.trim();
     
}

console.log(reverseOrder("Hello World")); 