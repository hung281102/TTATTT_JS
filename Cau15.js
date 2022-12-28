//!Viết chương trình Hai số nguyên tố sinh đôi là hai số nguyên tố hơn kém nhau 2 đơn vị. Tìm hai số nguyên tố sinh đôi nhỏ hơn hoặc bằng N, với N được nhập vào từ bàn phím.

const n = 100;

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
const array = sangEratosthenes(n);

for (let i = 1; i < array.length; i++) {
    if (array[i] - array[i - 1] === 2) {
        console.log(array[i], array[i - 1]);
    }
}
