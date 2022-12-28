//!. Viết chương trình đếm số các số Carmichael (là các số giả nguyên tố n thoả mãn điều kiện là hợp số và thoả mãn b^(n-1)≡1 (mod n)
//! với mọi số nguyên dương b nguyên tố cùng nhau với n) nhỏ hơn một số N cho trước nhập vào từ bàn phím (với điều kiện 0≤N≤10000

//!Carmichael
const n = 10000;

function chuyen_Nhi_Phan(n) {
    let bin = [];
    while (n != 0) {
        let r = n % 2;
        bin.push(r);
        n = Math.floor(n / 2);
    }
    return bin;
}
function UCLN(a, b) {
    if (b == 0) return a;
    return UCLN(b, a % b);
}

//! Tinh B ^ (n - 1) mod n

function binh_Phuong_Co_Lap(B, n) {
    let k = chuyen_Nhi_Phan(n - 1);
    // console.log(k);
    let b = 1,
        A = B;
    if (k[0] === 1) {
        b = B;
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
// console.log(binh_Phuong_Co_Lap(3, 283));

function sangEratosthenes(n) {
    let check = new Array(n + 1).fill(true);
    // console.log(check);
    check[0] = false;
    check[1] = false;
    for (let i = 2; i <= n; i++) {
        if (check[i] == true) {
            for (let j = 2 * i; j <= n; j += i) {
                check[j] = false;
            }
        }
    }
    return check;
}
const isPrime = sangEratosthenes(n);

function isCarmichael(n) {
    if (isPrime[n] || n < 2) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        //! Nếu có ước chung lớn nhất với n = 1
        if (UCLN(i, n) === 1) {
            //! i ^ n - 1 đồng dư với 1 mod n
            if (binh_Phuong_Co_Lap(i, n) !== 1) {
                return false;
            }
        }
    }
    return true;
}
let count = 0;

for (let index = 0; index <= n; index++) {
    if (isCarmichael(index)) {
        count++;
    }
}
console.log("Count = " + count);
