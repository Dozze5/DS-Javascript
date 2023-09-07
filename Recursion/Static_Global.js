let x = 0;

function fun(n){
    
    // var x = 0
    if(n==0){
        return 0;
    }

    x++;
    return fun(n-1)+x;
}

/* -------------------------------------------------------------------------- */
/*                                    diff                                    */
/* -------------------------------------------------------------------------- */

var y = 0;

function fun2(n){
    
    // var x = 0
    if(n==0){
        return 0;
    }

    
    return fun2(n-1)+y++;
}

const val = fun(5)
const val2 = fun2(5)
console.log(val);
console.log(val2)