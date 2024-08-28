//Create an array with range of numbers

const rangeOfNumbers = (sn, en)=>{
    if(en < sn){
        return [];
    }
    const numbers = rangeOfNumbers(sn, en - 1);
    numbers.push(en);
    return numbers;
}
console.log(rangeOfNumbers(1, 8))
