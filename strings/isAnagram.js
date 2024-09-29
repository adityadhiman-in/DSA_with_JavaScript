// Check if the given string is valid anagram or not

const isAnagramBruteForce = (a,b)=>{
    return a.split("").sort().join("") === b.split("").sort().join("");
    
}
console.log(isAnagramBruteForce("lallu", "allul"));

const isAnagramOptimised = (a, b) =>{
    if(a.length !== b.length){
        return false;
    }
    let objA = {};
    let objB = {};
    
    for(let i = 0; i < a.length; i++){
        objA[a[i]] = (objA[a[i]] || 0) + 1;
        objB[b[i]] = (objB[b[i]] || 0) + 1;
    }
    for(const key in objA){
        if(objA[key] !== objB[key]){
            return false
        }
    }
    return true;
}
console.log(isAnagramOptimised("kakaka", "akakak"));
console.log(isAnagramOptimised("lallu", "ballu"));