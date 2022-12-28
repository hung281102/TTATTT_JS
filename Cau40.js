//! Cho mảng A nhập từ bàn phím gồm các số nguyên dương.
//! Hãy viết chương trình đếm các cặp số (i,j) trong mảng A sao cho ước chung lớn nhất của chúng là một số nguyên tố.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function check(n) {
    if (n < 2) return false;
    for (let index = 2; index <= Math.sqrt(n); index++) {
        if (n % index === 0) {
            return false;
        }
    }
    return true;
}
function UCLN(a, b) {
    if (b == 0) return a;
    return UCLN(b, a % b);
}

var count = 0;

for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (check(UCLN(i, j))) {
            count++;
        }
    }
}
console.log(count);
