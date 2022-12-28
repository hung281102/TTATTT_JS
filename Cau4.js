//!Viết chương trình đếm số số nguyên tố nằm trong khoảng [A,B] với A, B nhập vào từ bàn phím. (sàng đoạn)

const a = 1;
const b = 100;

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

console.log(sang(a, b));
