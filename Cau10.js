//! Viết chương trình đếm số ước và số ước nguyên tố của một số N nhập vào từ bàn phím.

const n = 100;

function demUoc(n) {
    let check = new Array(n + 1).fill(true);
    // console.log(check);
    for (let i = 2; i <= n; i++) {
        if (check[i] == true) {
            for (let j = 2 * i; j <= n; j += i) {
                check[j] = false;
            }
        }
    }
    const result = { soUoc: 0, uocNguyenTo: 0 };

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            result.soUoc += 2;
            if (i > 1 && check[i]) {
                result.uocNguyenTo++;
            }
        }
    }
    return result;
}
//! Ước số lấy cả số âm
console.log(demUoc(n));
