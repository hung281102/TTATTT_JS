//! Một số gọi là siêu số nguyên tố nếu số lượng các số nguyên tố từ 1 đến X (ngoại trừ X) là một số nguyên tố.
//! Hãy viết chương trình đếm số lượng các siêu số nguyên tố này trong khoảng [A,B] cho trước nhập từ bàn phím

const A = 10,
    B = 1000;

function demNTBangSangEratosthenes(n) {
    let check = new Array(n + 1).fill(true);
    // console.log(check);
    for (let i = 2; i <= n; i++) {
        if (check[i] == true) {
            for (let j = 2 * i; j <= n; j += i) {
                check[j] = false;
            }
        }
    }
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (check[i]) {
            count++;
        }
    }
    return count;
}

function check(n) {
    if (n < 2) return false;
    for (let index = 2; index <= Math.sqrt(n); index++) {
        if (n % index === 0) {
            return false;
        }
    }
    return true;
}
//! Bản thân nó k cần là số nguyên tố
let count = 0;
for (let i = A; i <= B; i++) {
    if (check(demNTBangSangEratosthenes(i))) {
        count++;
    }
}
console.log(count);
