// Find the second largest number in the array

const arr = [2, 10, 5, 15, 3, 7];


//BruteForce Approach - Time Complexity => O(n^2)
const secondLargestElementI =  (arr)=>{
    const uniqueArr = Array.from(new Set(arr));
    uniqueArr.sort((a,b)=>{ return b - a});
    if(uniqueArr.length >= 2){
        return uniqueArr[1];
    }
    else return -1
}


//Optimised Approach - Time Complexity => O(n)
const secondLargestElementII = (arr)=>{
    let largest = Number.NEGATIVE_INFINITY;
    let secondLargestElement = Number.NEGATIVE_INFINITY;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > largest){
            secondLargestElement = largest;
            largest = arr[i];
        }
        else if(arr[i] < largest && arr[i] > secondLargestElement){
            secondLargestElement = arr[i];
        }
    }
    return secondLargestElement;
}

console.log(secondLargestElementI(arr));
console.log(secondLargestElementII(arr));