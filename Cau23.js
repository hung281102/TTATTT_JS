const a = 1,
    b = 13;

function check(n) {
    if (n < 2) return false;
    for (let index = 2; index <= Math.sqrt(n); index++) {
        if (n % index === 0) {
            return false;
        }
    }
    return true;
}

function demNto(L, R) {
    let result = 0;
    for (let i = L; i <= R; i++) {
        if (check(i)) {
            result++;
        }
    }
    return result;
}
if (check(demNto(a, b))) {
    console.log("YES");
} else {
    console.log("NO");
}
