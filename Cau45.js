//! Viết chương trình sinh một mảng số nguyên tố A gồm N phần tử (N nhập từ bàn phím) sử dụng kiểm tra Miller-Rabin.
//!In ra mảng và tính khoảng cách nhỏ nhất giữa 2 số bất kỳ trong mảng.

//! Bình phương có lặp

function chuyen_Nhi_Phan(n) {
    let bin = [];
    while (n != 0) {
        let r = n % 2;
        bin.push(r);
        n = Math.floor(n / 2);
    }
    return bin;
}

//! a ^ pow mod n
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
//! Miller rabin
function millerRabin(r, n) {
    let a = Math.round(Math.random() * (n - 4)) + 2;
    // console.log("a = " + a);

    let x = binh_Phuong_Co_Lap(a, r, n);

    // console.log("x = " + x);

    if (x === 1 || x === n - 1) {
        return true;
    }

    while (r !== n - 1) {
        x = (x * x) % n;
        r = r * 2;

        if (x === 1) {
            return false;
        }
        if (x === n - 1) {
            return true;
        }
    }
    return false;
}

//! Check prime
const k = 3;
function isPrime(n, k) {
    if (n <= 1 || n === 4) {
        return false;
    }
    if (n <= 3) {
        return true;
    }

    let r = n - 1;
    while (r % 2 === 0) {
        r = Math.floor(r / 2);
    }

    while (k > 0) {
        if (!millerRabin(r, n)) {
            return false;
        }
        k--;
    }
    return true;
}

const n = 20;
//! Mang A gom n phan tu, max(a[i]) < 100
let a = new Array(n);
for (let index = 0; index < n; index++) {
    a[index] = Math.floor(Math.random() * 100);
}

// console.log(a);
let b = [];
for (let index = 0; index < a.length; index++) {
    if (isPrime(a[index], 3)) {
        b.push(a[index]);
    }
}
console.log("b = " + b);
console.log(b);
//! khoang cach nho nhat
let min = Math.abs(b[0] - b[1]);
for (let i = 2; i < b.length; i++) {
    if (Math.abs(b[i] - b[i - 1]) < min) {
        min = Math.abs(b[i] - b[i - 1]);
    }
}
console.log("Min = " + min);
