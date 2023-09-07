function fun(n){
    if(n==0){return 0}
    process.stdout.write(`${n} `)
    fun(n-1);
    console.log("")
    fun(n-1);
}


function fun2(n){
    if(n==0){return 0}
    fun2(n-1);
    console.log("")
    fun2(n-1);
    process.stdout.write(`${n} `)
}


fun(3)
console.log("\nTail")
fun2(5)