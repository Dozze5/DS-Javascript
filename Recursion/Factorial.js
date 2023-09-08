function Factorial(n){
    if(n == 1){
        return 1;
    }
    return Factorial(n-1) * n;
}

console.log(Factorial(6))