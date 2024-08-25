//Find the sub array with largest sum and return the sum.

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];


//Brute Force Approach - Time Complexity => O(n^2)
const maxSubArray = (nums)=>{
    let maxSum = nums[0];
    let si = 0, ei = 0;
    for (let i = 0; i < nums.length; i++) {
        let currentSum = 0;
        for (let j = i; j < nums.length; j++) {
            currentSum = currentSum + nums[j];
            if(currentSum > maxSum){
                maxSum = currentSum;
                si = i;
                ei = j;
            }
        }
    }
    return {
        sum : maxSum,
        subArray : nums.slice(si, ei + 1)
    }
}

console.log(maxSubArray(arr));


//Optimised Approach - Kadane's Algorithm

const maxSubArrayOptimised = (nums)=>{
    let sum = 0;
    maxSum = nums[0];
    for(let i = 0; i < nums.length; i++){
        sum = sum + nums[i];
        if(sum > maxSum){
            maxSum = sum;
        }
        else if(sum < 0){
            sum = 0;
        }
    }
    return maxSum;
}

console.log(maxSubArrayOptimised(arr));