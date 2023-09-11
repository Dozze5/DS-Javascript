
/* -------------------------------------------------------------------------- */
/*                        Optimized Recursion Fibonacci                       */
/* -------------------------------------------------------------------------- */


let n = 9;

const f = new Array(9);

f.fill(-1);

function fib(n){
    if(n <= 1){
        f[n] = n;
        return n;
    }

    else{
        if(f[n-2] == -1) {f[n-2] = fib(n-2)}
        if(f[n-1] == -1) {f[n-1] = fib(n-1)}
    }

    process.stdout.write(`${f[n-2]+f[n-1]} `);

    return f[n-2]+f[n-1];
}

process.stdout.write(`0 1 `);

fib(n);