//! Cho mảng A gồm các số nguyên thuộc F_p nhập vào từ bàn phím, hãy viết chương trình in ra mảng B có các phần tử là nghịch đảo của các phần tử tương ứng trong A.

function extend_Euclide(a, b) {
    let d;
    if (b == 0) {
        d = a;
        x = 1;
        y = 0;
        return { d, x, y };
    } else {
        (x1 = 0), (x2 = 1), (y1 = 1), (y2 = 0);
        while (b > 0) {
            let q = Math.floor(a / b);
            let r = a - q * b;
            x = x2 - q * x1;
            y = y2 - q * y1;
            a = b;
            b = r;
            x2 = x1;
            x1 = x;
            y2 = y1;
            y1 = y;
        }
        d = a;
        x = x2;
        y = y2;
    }
    while (x2 < 0) {
        x2 = x2 + p;
    }

    return x2;
}

function UCLN(a, b) {
    if (b == 0) return a;
    return UCLN(b, a % b);
}

const p = 11,
    n = 10;

const a = [2, 4, 7, 9, 10, 11, 12, 14, 16, 31];

let b = new Array(n).fill(0);

for (let i = 0; i < n; i++) {
    b[i] = extend_Euclide(a[i], p);
}

console.log(b);
