// Check the given string and return the hamming distance

const hammingDistanceString = (s1, s2)=>{
    if(s1.length !== s2.length){
        return "length not equal"
    }
    let distance = 0;
    for(let i = 0; i < s1.length; i++){
        if(s1[i] !== s2[i]){
            distance++;
        }
    }
    return distance;
}
console.log(hammingDistanceString("hello", "bello"));
const hammingDistanceInt = (int1, int2) => {
    int1 = int1.toString(2);
    int2 = int2.toString(2);

    if (int1.length < int2.length) {
        while (int1.length < int2.length) {
            int1 = "0" + int1;
        }
    } else if (int1.length > int2.length) {
        while (int2.length < int1.length) {
            int2 = "0" + int2;
        }
    }

    let distance = 0;
    for (let i = 0; i < int1.length; i++) {
        if (int1[i] !== int2[i]) {
            distance++;
        }
    }

    return distance;
}

console.log(hammingDistanceInt(2, 8));  
