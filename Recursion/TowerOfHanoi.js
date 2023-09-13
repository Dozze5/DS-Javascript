var n = 1;

function towerOfHanoi(d,A,B,C){
    if(d>0){
        towerOfHanoi(d-1,A,C,B);
        console.log(`${n++} --> move disk ${d} from ${A} to ${C}`);
        console.log()
        towerOfHanoi(d-1,B,A,C);
    }
}

towerOfHanoi(16,'A','B','C')