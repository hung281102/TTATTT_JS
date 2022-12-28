//! Hãy viết chương trình in ra các số Q-Prime nhỏ hơn hoặc bằng một số N cho trước nhập từ bàn phím (số có đúng 4 ước)

let n = 100;

function uocSo(n) {
    let count = 0;
    for (let index = 1; index <= n; index++) {
        if (n % index === 0) {
            count++;
        }
    }
    return count;
}

function printQ_prime(n) {
    for (let index = 1; index <= n; index++) {
        if (uocSo(index) === 4) {
            console.log(index);
        }
    }
}
printQ_prime(n);
