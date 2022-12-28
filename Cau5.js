//!Viết chương trình tính tổng của các số nguyên tố nằm trong khoảng [A, B] với A, B nhập vào từ bàn phím

const a = 10;
const b = 100;
function check(n) {
    if (n < 2) return false;
    for (let index = 2; index <= Math.sqrt(n); index++) {
        if (n % index === 0) {
            return false;
        }
    }
    return true;
}
function sang(L, R) {
    let result = [];
    for (let i = L; i <= R; i++) {
        if (check(i)) {
            result.push(i);
        }
    }
    return result;
}

const arrPrime = sang(a, b);

var sum = 0;
for (let index = 0; index < arrPrime.length; index++) {
    sum += arrPrime[index];
}
console.log(sum);

// console.log(arrPrime.reduce((a, b) => a + b));
