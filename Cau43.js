//! Cho N nhập vào từ bàn phím (0<N<1000), hãy viết chương trình tìm tất cả các số nguyên a<N sao cho a^p mod N là số nguyên tố.

const n = 111;

function check(n) {
    if (n < 2) return false;
    for (let index = 2; index <= Math.sqrt(n); index++) {
        if (n % index === 0) {
            return false;
        }
    }
    return true;
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

//! 0<p<1000

const p = Math.floor(Math.random() * 1000);
console.log("p = " + p);
for (let i = 0; i < n; i++) {
    if (check(binh_Phuong_Co_Lap(i, p, n))) {
        console.log("a ^ p mod n: " + binh_Phuong_Co_Lap(i, p, n));
        console.log(i);
    }
}
