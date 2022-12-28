const L = 10,
    R = 1000;

function check(n) {
    if (n < 2) return false;
    for (let index = 2; index <= Math.sqrt(n); index++) {
        if (n % index === 0) {
            return false;
        }
    }
    return true;
}

let result = 0;
for (let i = L; i < R; i++) {
    for (let j = i + 1; j <= R; j++) {
        if (j > i && check(i) && check(j)) {
            result += i * j;
        }
    }
}

console.log("Sum = " + result);
