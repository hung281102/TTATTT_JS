//!Viết chương trình in ra các cặp số (A,B) nằm trong khoảng (M,N) sao cho ước số chung lớn nhất của A và B có giá trị là một số D cho trước.
//! Với M,N,D nhập vào từ bàn phím. (0<M,N, D < 1000).

const M = 20,
    N = 100,
    D = 10;
function UCLN(a, b) {
    if (b == 0) return a;
    return UCLN(b, a % b);
}

for (let i = M + 1; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
        if (UCLN(i, j) === D) {
            console.log(i, j);
        }
    }
}
