//!Miller-Rabin

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

//! check miller rabin

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

//! Số nguyên n và tham số an toàn k
const n = 11,
    k = 3;
if (isPrime(n, k)) {
    console.log("So nguyen to");
} else {
    console.log("Hop so");
}
