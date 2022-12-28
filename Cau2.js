//! Viết chương trình tìm các số nguyên tố có N chữ số với N nhập từ bàn phím và 2 ≤ N ≤10.

let n = 2;

function check(n) {
    if (n < 2) return false;
    for (let index = 2; index <= Math.sqrt(n); index++) {
        if (n % index === 0) {
            return false;
        }
    }
    return true;
}
function printPrimeNumber() {
    let result = [];
    for (let index = Math.pow(10, n - 1); index < Math.pow(10, n); index++) {
        if (check(index) === true) {
            result.push(index);
        }
    }
    return result;
}

console.log(printPrimeNumber());
