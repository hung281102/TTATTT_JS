//!Một số emirp là một số nguyên tố mà khi đảo ngược vị trí các chữ số của nó, ta cũng được một số nguyên tố. Viết chương trình liệt kê các số emirp nhỏ hơn N với N nhập vào từ bàn phím.
const n = 100;

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function reverse(n) {
    return parseInt(n.toString().split("").reverse().join(""));
}

for (let i = 10; i < n; i++) {
    if (isPrime(i)) {
        if (isPrime(reverse(i))) {
            console.log(i);
        }
    }
}
