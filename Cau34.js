//! Fermat

//!Viết chương trình kiểm tra tính nguyên tố của một số n nhập vào từ bàn phím

//? Kiểm tra 383 có phái số nguyên tố k với t = 3

//? Fermat sai với các số Carmichael vì cho kết quả là số nguyên tố giả (sai với trường hợp n = 561 nhưng vẫn trả về nguyên tố)

var n = 561,
    t = 3;

function chuyen_Nhi_Phan(n) {
    let bin = [];
    while (n != 0) {
        let r = n % 2;
        bin.push(r);
        n = Math.floor(n / 2);
    }
    return bin;
}

// console.log(chuyen_Nhi_Phan(382));

function binh_Phuong_Co_Lap(a) {
    let k = chuyen_Nhi_Phan(n - 1);
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
// console.log(binh_Phuong_Co_Lap(2));

function fermat() {
    let a, r;
    for (let i = 0; i <= t; i++) {
        //! Random  n + 2 <= a <= n - 2
        a = Math.round(Math.random() * (n - 4)) + 2;

        console.log("a = ", a);
        r = binh_Phuong_Co_Lap(a);
        // console.log("r = ", r);
        if (r === 1) {
            console.log("Nguyen to");
            break;
        }
        if (r !== 1 && i === t) {
            console.log("Hop so");
        }
    }
}

fermat();
