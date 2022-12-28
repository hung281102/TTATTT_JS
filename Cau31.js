const msv = 170210;

function check(n) {
    if (n < 2) return false;
    for (let index = 2; index <= Math.sqrt(n); index++) {
        if (n % index === 0) {
            return false;
        }
    }
    return true;
}

// let ntoTren, ntoDuoi;
for (let index = msv; ; index++) {
    if (check(index)) {
        ntoTren = index;
        break;
    }
}

for (let index = msv; ; index--) {
    if (check(index)) {
        ntoDuoi = index;
        break;
    }
}

console.log(ntoTren, ntoDuoi);
let k = Math.abs(msv - ntoDuoi) > Math.abs(msv - ntoTren) ? ntoTren : ntoDuoi;
//! Test
// let a = 3;
console.log(k);

//! Tinh a^k mod n
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

const a = 100,
    n = 123456;

console.log("a = " + a, "k = " + k, "n = " + n);
console.log(binh_Phuong_Co_Lap(a, k, n));
