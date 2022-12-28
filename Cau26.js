//! So manh me

const n = 100;

function check(n) {
    if (n < 2) return false;
    for (let index = 2; index <= Math.sqrt(n); index++) {
        if (n % index === 0) {
            return false;
        }
    }
    return true;
}
function sangEratosthenes(n) {
    let check = new Array(n + 1).fill(true);
    // console.log(check);
    for (let i = 2; i <= n; i++) {
        if (check[i] == true) {
            for (let j = 2 * i; j <= n; j += i) {
                check[j] = false;
            }
        }
    }
    let result = [];
    for (let i = 2; i <= n; i++) {
        if (check[i]) {
            result.push(i);
        }
    }
    return result;
}

// console.log(sangEratosthenes(100));
const arr = sangEratosthenes(100);
for (let i = 1; i <= n; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (i % arr[j] === 0 && i % Math.pow(arr[j], 2) === 0) {
            console.log(i);
        }
    }
}
