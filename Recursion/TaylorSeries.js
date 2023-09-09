f = 1.0;
p = 1.0;



function e(x , n){
    var r;

    if(n == 0) return 1;

    r = e(x , n-1);
    p *= x;
    f *= n;
    return r+p/f
}

console.log(e(4,15).toFixed(5))


/* -------------------------------------------------------------------------- */
/*                          Taylor Series Horner Rule                         */
/* -------------------------------------------------------------------------- */


s = 1.0

function Horner(x,n){
    if(n == 0) return s;

    s = 1+ x*s/n;

    return Horner(x,n-1);
}

console.log(Horner(4,15).toFixed(5));