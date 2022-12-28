//! Viết chương trình in ra các số nguyên dương x nằm trong khoảng [m,l] sao cho giá trị của biểu thức Ax^2+Bx+C là một số nguyên tố.
//! Với A,B,C, m,l là các số nguyên nhập từ bàn phím (m<l).

const a = 2,
    b = 6,
    c = 3;
const m = 10,
    n = 20;

function check(n) {
    if (n < 2) return false;
    for (let index = 2; index <= Math.sqrt(n); index++) {
        if (n % index === 0) {
            return false;
        }
    }
    return true;
}

for (let i = m; i <= n; i++) {
    let kq = a * i * i + b * i + c;
    if (check(kq)) {
        console.log("x = " + i);
    }
}

// console.log(check(311));
