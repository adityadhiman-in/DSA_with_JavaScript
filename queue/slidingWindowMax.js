// Sliding Window Maximum


// Input : nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output : [3,3,5,5,6,7]

const arr = [1,3,-1,-3,5,3,6,7];
const k = 3;

const slidingWindowMax = (arr,k)=>{
    const result = [];
    const dequeue = [];

    for(let i = 0; i < arr.length; i++){
        if(dequeue.length > 0 && dequeue.length <= i -k){
            dequeue.shift();
        }
    while(dequeue.length > 0 && arr[dequeue[dequeue.length - 1]] < arr[i]){
        dequeue.pop();
    }
    dequeue.push(i);
    if(i >= k - 1){
        result.push(arr[dequeue[0]]);
    }
    }
    return result;
}

console.log(slidingWindowMax(arr, k));