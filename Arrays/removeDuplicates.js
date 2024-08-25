//Remove duplicate elements from the array

const arr = [1,2,1,12,4,55,2,3,3,55];

// BruteForce Approach
const removeDuplicates = (arr)=>{
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] === arr[i+1]){
            arr.splice(i+1, 1);
            i--
        }
    }
    return arr;
}

console.log(removeDuplicates(arr));

const removeDuplicatesOptimised = (arr) => {
    if (arr.length === 0) {
        return arr;
    }
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return arr.slice(0, i + 1);
} 

console.log(removeDuplicatesOptimised(arr));