//!Một số gọi là số Т-prime nếu có có đúng 3 ước nguyên dương. Viết chương trình tìm các số Т-prime nhỏ hơn hoặc bằng N với N cho trước nhập từ bàn phím.

const n = 1000;

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

for (let i = 1; i * i <= n; i++) {
    if (isPrime(i)) {
        console.log(i * i);
    }
}
