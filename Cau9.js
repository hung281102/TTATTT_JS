//!Viết chương trình đếm số số nguyên tố nhỏ hơn hoặc bằng N với N được nhập vào từ bàn phím.

const n = 100;

function sangEratosthenes(n) {
    let check = new Array(n + 1).fill(true);
    // console.log(check);
    for (let i = 2; i <= n; i++) {
        if (check[i] == true) {
            for (let j = i * i; j <= n; j += i) {
                check[j] = false;
            }
        }
    }
    let count = 0;
    for (let i = 2; i <= n; i++) {
        if (check[i]) {
            count++;
        }
    }
    return count
}

sangEratosthenes(n);
