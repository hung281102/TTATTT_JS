//! Viết chương trình in ra các cặp số (a,b) thoả mãn điều kiện 0<a,b<1000, sao cho ước chung lớn nhất của 2 số đó là một số nguyên tố
const a = 0,
    b = 1000;
function UCLN(a, b) {
    if (b == 0) return a;
    return UCLN(b, a % b);
}

function sangEratosthenes(n) {
    let check = new Array(n + 1).fill(true);
    check[0] = false;
    check[1] = false;

    // console.log(check);
    for (let i = 2; i <= n; i++) {
        if (check[i] == true) {
            for (let j = 2 * i; j <= n; j += i) {
                check[j] = false;
            }
        }
    }

    return check;
}
const arr = sangEratosthenes(b);
// console.log(arr);

function check(n) {
    if (n < 2) return false;
    for (let index = 2; index <= Math.sqrt(n); index++) {
        if (n % index === 0) {
            return false;
        }
    }
    return true;
}

for (let i = 0; i < 100; i++) {
    for (let j = i + 1; j <= 100; j++) {
        let uc = UCLN(i, j);
        if (check(uc)) {
            console.log(i, j);
        }
    }
}
