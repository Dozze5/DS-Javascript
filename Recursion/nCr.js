
/* -------------------------------------------------------------------------- */
/*                            Using Pascal Triangle                           */
/* -------------------------------------------------------------------------- */

function C(n, r) {

    if (n == r || r == 0) {
        return 1;
    }

    return C(n - 1, r - 1) + C(n - 1, r);
}
n = 23;
r = 12;

if (n < r || n < 0 || r < 0) {
    console.log("\t\n\nInvalid\n\n");
}
else if (n == r || r == 0) {
    console.log("\n\n\t 1 \n\n");
}
else {
    console.log(C(n, r));
}