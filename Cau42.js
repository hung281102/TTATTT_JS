//! Viết chương trình sinh ra 2 số nguyên tố 0<p,q<1000 và kiểm tra với với số 0<a<100 thì những số nào thoả mãn: a^p mod q là số nguyên tố.
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

//! Binh phuong co lap

function chuyen_Nhi_Phan(n) {
    let bin = [];
    while (n != 0) {
        let r = n % 2;
        bin.push(r);
        n = Math.floor(n / 2);
    }
    return bin;
}
function binh_Phuong_Co_Lap(a, pow, n) {
    let k = chuyen_Nhi_Phan(pow);
    // console.log(k);
    let b = 1,
        A = a;
    if (k[0] === 1) {
        b = a;
    }
    for (let i = 1; i <= k.length - 1; i++) {
        A = Math.pow(A, 2) % n;
        // console.log("i = ", i);
        // console.log("w = ", w);
        // console.log("a = ", a);
        if (k[i] === 1) {
            b = (A * b) % n;
        }
        // console.log("A = ", A);
        // console.log("b = ", b);
    }
    return b;
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

const array = sangEratosthenes(n);
// console.log(array);

// const p = array[Math.floor(Math.random() * array.length)];
// const q = array[Math.floor(Math.random() * array.length)];
const p = sangEratosthenes(n);
const q = sangEratosthenes(n);

// console.log("p = " + p, "q = " + q);

// console.log("Nhung gia tri thoa man index ^ p mod q la nguyen to:");
// for (let index = 1; index < 100; index++) {
//     if (check(binh_Phuong_Co_Lap(index, p, q))) {
//         console.log(index);
//     }
// }
const a = 26;
for (let i = 0; i < q.length; i++) {
    for (let j = i + 1; j < p.length; j++) {
        if (check(binh_Phuong_Co_Lap(a, q[i], p[j]))) {
            console.log([a, q[i], p[j]]);
        }
    }
}
