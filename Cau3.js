//!. Cho một số nguyên dương N, gọi:
//! -	k là số ước nguyên tố của N;
//! -	q là tổng của các ước nguyên tố của N;
//! -	p là tổng của các ước số của N;
//! -	s là số ước của N;

console.log("Nhap n: ");
//! Phương thức nhập trong js
process.stdin.on("data", (data) => {
    let n = parseInt(data);
    //! Tính số ước và ước của N
    function uocSo(n) {
        let result = { arr: [], count: 0 };
        for (let index = 1; index <= n; index++) {
            if (n % index === 0) {
                result.count++;
                result.arr.push(index);
            }
        }
        return result;
    }
    //! Tính số ưóc nguyên tố của N
    function check(n) {
        if (n < 2) return false;
        for (let index = 2; index <= Math.sqrt(n); index++) {
            if (n % index === 0) {
                return false;
            }
        }
        return true;
    }

    function uocNguyenTo(n) {
        let result2 = { arr2: [], count2: 0 };
        for (let index = 1; index <= n; index++) {
            if (n % index === 0) {
                if (check(index)) {
                    result2.count2++;
                    result2.arr2.push(index);
                }
            }
        }
        return result2;
    }

    let k = uocNguyenTo(n).count2;
    let q = uocNguyenTo(n).arr2.reduce((prev, cur) => prev + cur, 0);

    let p = uocSo(n).arr.reduce((prev, cur) => prev + cur, 0);
    let s = uocSo(n).count;

    console.log("KQ: ", n + p + s - q - k);

    process.exit();
});
