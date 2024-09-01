// Subsets - return all the subsets of a given integer array

const powerSet = (arr)=>{
    let result = [];
    let temp = [];
    
    const recursivePowerSet = (arr, i)=>{
        if(i === arr.length){
            return result.push([...temp]);
        }
        temp.push(arr[i]);
        recursivePowerSet(arr, i+1);
        temp.pop();
        recursivePowerSet(arr, i+1);
    }
    recursivePowerSet(arr, 0);
    return result;
}

console.log(powerSet([1,2,3]));