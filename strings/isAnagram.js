// Check if the given string is valid anagram or not

const isAnagram = (str, tar)=>{
    const strArr = Array.from(str).sort((a,b) => a - b);
    const tarArr = Array.from(tar).sort((a,b) => a - b);;
}

console.log(isAnagram("hey", "bey"))