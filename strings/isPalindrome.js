// Check the number is it is palindrome or not

const ispalindrome = (x)=>{
    return x.toString() === x.toString().split().reverse().join() && true;
}
console.log(ispalindrome(121));
