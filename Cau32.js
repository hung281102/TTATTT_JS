//! RSA

//! Tìm số nguyên số p, q (trong đó 100 < p, q < 500)  => Nhập

// const p = 37,
//     q = 41;

function check(n) {
    if (n < 2) return false;
    for (let index = 2; index <= Math.sqrt(n); index++) {
        if (n % index === 0) {
            return false;
        }
    }
    return true;
}
let array = [];

for (let i = 100; i < 500; i++) {
    if (check(i)) {
        array.push(i);
    }
}

const p = array[Math.floor(Math.random() * array.length)];
const q = array[Math.floor(Math.random() * array.length)];

console.log("p =  " + p, "q = " + q);

//! Tính n = p.q; (n) = (p – 1) (q – 1)
const N = p * q;
const epN = (p - 1) * (q - 1);
// console.log(epN);
//! 	Chọn e là số nguyên tố cùng nhau với epN(n) (gcd(e, epN(n)) = 1)
const e = 211;

function UCLN(a, b) {
    if (b == 0) return a;
    return UCLN(b, a % b);
}

// console.log(UCLN(epN, e));

function extend_Eculide(e, epN) {
    let d;
    if (epN == 0) {
        d = e;
        x = 1;
        y = 0;
        return { d, x, y };
    } else {
        (x1 = 0), (x2 = 1), (y1 = 1), (y2 = 0);
        while (epN > 0) {
            let q = Math.floor(e / epN);
            let r = e - q * epN;
            x = x2 - q * x1;
            y = y2 - q * y1;
            e = epN;
            epN = r;
            x2 = x1;
            x1 = x;
            y2 = y1;
            y1 = y;
        }
        d = e;
        x = x2;
        y = y2;
        return { d, x, y };
    }
}
//! Mã hoá
var encryption = extend_Eculide(e, epN);
const d = encryption.x < 0 ? encryption.x + epN : encryption.x;
if (e < epN) {
    console.log("d = e ^ -1 mod epN = ", d);
} else {
    console.log("epN ^ -1 mod e = ", encryption.y);
}

//! Giải mã
const msv = 170226;
// const m = sbd + 123;
const m = 47 + 123;

//! Thuật toán bpcl

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

const c = binh_Phuong_Co_Lap(m, e, N);
console.log("Ban ma C thu được: c = m ^ e mod n = " + c);

console.log(
    "Giai ma thong diep:  m = c ^ d mod n = " + binh_Phuong_Co_Lap(c, d, N)
);
