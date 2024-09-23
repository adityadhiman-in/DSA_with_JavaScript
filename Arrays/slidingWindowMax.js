// Sliding window maximum

// Input : nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output : [3,3,5,5,6,7]

const arr = [1,3,-1,-3,5,3,6,7];
const k = 3;

const slidingWindowMax = (arr, k)=>{
    let result = [];
    const len = arr.length;

    for(let i = 0; i <= len - k; i++){
        let max = arr[i];
        for(let j = 1; j < k; j++){
            if(arr[i + j] > max){
                max = arr[i +j];
            }
        }
        result.push(max);
    }
    return result;
}

console.log(slidingWindowMax(arr, k)); 