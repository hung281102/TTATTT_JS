//! Cho các số nguyên dương a,k,n, nhập từ bàn phím (0<a,k<n<1000),
//!Viết chương trình xác định xem a^k mod n có phải là một số nguyên tố hay không (sử dụng thuật toán bình phương và nhân có lặp)?

function check(n) {
    if (n < 2) return false;
    for (let index = 2; index <= Math.sqrt(n); index++) {
        if (n % index === 0) {
            return false;
        }
    }
    return true;
}

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

console.log(binh_Phuong_Co_Lap(47, 211, 517));

console.log(check(binh_Phuong_Co_Lap(47, 211, 517)) ? "NGUYEN TO" : "HOP SO");
