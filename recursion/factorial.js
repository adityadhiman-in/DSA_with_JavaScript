// Find the factorial of the number with recursion

const factorialCalc = (x)=>{
    if(x === 0){
        return 1;
    }
    return x * factorialCalc(x - 1);
}
console.log(factorialCalc(4));