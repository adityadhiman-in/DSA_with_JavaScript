// Truncate the text 
// write a function that checks the length of string if more than 10 then trim it and add "..." in it.

const truncate = (str)=>{
    const validStr = str.length > 10 ? str + " ..." : str;
    return validStr;
}
console.log(truncate("hello there")) 