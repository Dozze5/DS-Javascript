function fun(n){
    if(n>0){
        fun(n-1);
        console.log(n);
    }
};

function fun2(n){
    if(n>0){
        console.log(n);
        fun2(n-1);
    } 
}

fun(5);
console.log("\n")
fun2(5);