//Rotate the array by k steps

//BruteForce Approach
const arr = [1,3,53,4,33,67,2,31]
const rotateArray = (arr, k)=>{
    let len = arr.length;
    if(k > len){
       k = k % len;
    }
    const rotated = arr.splice(len - k, len);
    arr.unshift(...rotated);
    return arr;
}
console.log(rotateArray(arr, 4));


//Optimised Array
const rotateArrayOptimised = (arr, k) => {
    let len = arr.length;
    if (len === 0 || k === 0 || k % len === 0) {
        return arr;
    }
    k = k % len;
    const reverse = (arr, si, ei) => {
        while (si < ei) {
            [arr[si], arr[ei]] = [arr[ei], arr[si]];
            si++;
            ei--;
        }
    }
    reverse(arr, 0, len - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, len - 1);
    return arr;
}



console.log(rotateArrayOptimised(arr, 4))