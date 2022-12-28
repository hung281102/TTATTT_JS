//!Viết chương trình tìm bốn số nguyên tố liên tiếp, sao cho tổng của chúng là số nguyên tố nhỏ hơn hoặc bằng N

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

function sum(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

const array = sangEratosthenes(n);

// console.log(array);
for (let i = 0; i <= array.length - 4; i++) {
    let tmpArr = array.slice(i, i + 4);
    // console.log(tmpArr);
    if (sum(tmpArr) <= n && check(sum(tmpArr))) {
        console.log(tmpArr);
    }
}
