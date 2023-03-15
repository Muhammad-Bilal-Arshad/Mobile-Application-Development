function fibonacci(num, a = 0, b= 1){
    if(num===a || num ===b){
        return true;
    }
    else if(num<b){
        return false;
    }
    else
        return fibonacci(num,b,a+b)

}
let num = 6
if (fibonacci(num))
    console.log(num, "is in the Fibonacci sequence")
else
    console.log(num, "is not in the Fibonacci sequence")