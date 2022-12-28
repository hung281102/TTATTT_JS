const a = 10,
    b = 15;

//! Mảng S1, S2 chứa bình phương các số nguyên, mỗi mảng 20 số
let S1 = [],
    S2 = [];

for (let i = 1; i <= 20; i++) {
    S1.push(i * i);
    S2.push(i * i);
}

// console.log(S2);

//! Sàng tất cả các số nguyên tố [a, b]

function check(n) {
    if (n < 2) return false;
    for (let index = 2; index <= Math.sqrt(n); index++) {
        if (n % index === 0) {
            return false;
        }
    }
    return true;
}

function sang(L, R) {
    let result = [];
    for (let i = L; i <= R; i++) {
        if (check(i)) {
            result.push(i);
        }
    }
    return result;
}
// console.log(sang(a, b));

const array = sang(a, b);
//!Định lý Fermat-Euler về tổng hai bình phương: Điều kiện cần và đủ để một số nguyên tố có thể biểu diễn được dưới dạng tổng
//!của hai bình phương là số dư trong phép chia số ấy cho 4 bằng 1

var count = 0;
for (let index = 0; index < array.length; index++) {
    if (array[index] % 4 === 1) {
        count++;
    }
}
console.log(count);
