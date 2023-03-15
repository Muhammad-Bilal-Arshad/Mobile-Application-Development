function factorial(num){
    if (num===0 || num===1){
        return 1;
    }
    else{
        return num*factorial(num-1)
    }
}
let a = 6
console.log(factorial(a))