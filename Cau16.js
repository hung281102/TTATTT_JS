//! Viết chương trình tìm các số nguyên tố từ một mảng sinh ngẫu nhiên có kích thước N, với N nhập vào từ bàn phím. (Ngẫu nhiên từ 0 -> 10000)

const n = 20;

function check(n) {
    if (n < 2) return false;
    for (let index = 2; index <= Math.sqrt(n); index++) {
        if (n % index === 0) {
            return false;
        }
    }
    return true;
}

function start(n) {
    let arr = new Array(n);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.floor(Math.random() * 10000);
    }

    return arr;
}

const arr = start(n);

console.log("Mang ngau nhien: ");
console.log(arr);
console.log("So nguyen to trong mang: ");

for (let i = 0; i < arr.length; i++) {
    if (check(arr[i])) {
        console.log(arr[i]);
    }
}
