//! Tìm nghịch đảo của một số a trong trường F_p với a và p được nhập từ bàn phím.

const a = 1759,
    b = 550;

function extend_Eculide(a, b) {
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
        return { d, x, y };
    }
}

var encryption = extend_Eculide(a, b);

if (a < b) {
    console.log(
        " a ^ -1 mod b = ",
        encryption.x < 0 ? encryption.x + epN : encryption.x
    );
} else {
    console.log("b ^ -1 mod a = ", encryption.y);
}
