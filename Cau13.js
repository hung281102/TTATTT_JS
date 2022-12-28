//! Viết chương trình tìm hai số nguyên tố nhỏ hơn hoặc bằng N với N nhập vào từ bàn phím, sao cho tổng và hiệu của chúng đều là số nguyên tố.

const n = 1000;
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

function check(n) {
    if (n < 2) return false;
    for (let index = 2; index <= Math.sqrt(n); index++) {
        if (n % index === 0) {
            return false;
        }
    }
    return true;
}

let arr = sangEratosthenes(n);
// console.log(arr);
for (let i = 0; i < arr.length; i++) {
    if (check(arr[0] + arr[i]) && check(arr[i] - arr[0])) {
        console.log(arr[i], arr[0]);
    }
}
