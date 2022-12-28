//!Viết chương trình tính tổng của các số nguyên tố nhỏ hơn hoặc bằng N với N được nhập từ bàn phím.

const n = 10;

function tongSoNguyenToNhoHonN(n) {
    let check = new Array(n + 1).fill(true);
    // console.log(check);
    for (let i = 2; i <= n; i++) {
        if (check[i] == true) {
            for (let j = 2 * i; j <= n; j += i) {
                check[j] = false;
            }
        }
    }
    let sum = 0;

    for (let i = 2; i <= n; i++) {
        if (check[i]) {
            sum += i;
        }
    }
    return sum;
}
console.log("n = " + n);
console.log(tongSoNguyenToNhoHonN(n));
