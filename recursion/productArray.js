// Find the product of all elements of array with recursion

const arr = [1,2,4,5,6,7];

const productArray = (arr)=>{
    if(arr.length === 0){
        return 1;
    }
    return arr[arr.length - 1] * productArray(arr.slice(0, arr.length - 1));
}
console.log(productArray(arr));