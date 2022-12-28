//!Hai số tạo thành một cặp số thân thiết khi chúng tuân theo quy luật: Số này bằng tổng tất cả các ước của số kia (trừ chính số đó) và ngược lại.
//!Viết chương trình tìm hai số dạng này nhỏ hơn N (với N nhập vào từ bàn phím).

const n = 1000;

function tongUoc(n) {
    let result = 0;
    for (let index = 1; index < n; index++) {
        if (n % index === 0) {
            result += index;
        }
    }
    return result;
}
console.log(tongUoc(20));

for (let i = 1; i <= n; i++) {
    let tmp = tongUoc(i);
    if (i === tongUoc(tmp) && i !== tmp && tmp <= n) {
        console.log(tmp, i);
    }
}
