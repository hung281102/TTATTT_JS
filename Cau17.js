//!Viết chương trình tìm số nguyên dương x nhỏ nhất sao cho giá trị của biểu thức Ax^2+Bx+C là một số nguyên tố với A,B,C là các
//! số nguyên nhập vào từ bàn phím.

const a = 2,
    b = 1,
    c = 1;

function check(n) {
    if (n < 2) return false;
    for (let index = 2; index <= Math.sqrt(n); index++) {
        if (n % index === 0) {
            return false;
        }
    }
    return true;
}

for (let i = 1; ; i++) {
    let kq = a * i * i + b * i + c;
    if (check(kq)) {
        console.log("x = " + i);
        break;
    }
}
