//!Viết chương trình tìm số nguyên tố có ba chữ số, biết rằng nếu viết số đó theo thứ tự ngược lại thì ta được một số là lập phương của một số tự nhiên

function check(n) {
    if (n < 2) return false;
    for (let index = 2; index <= Math.sqrt(n); index++) {
        if (n % index === 0) {
            return false;
        }
    }
    return true;
}

function reverse(n) {
    return parseInt(n.toString().split("").reverse().join(""));
}

for (let index = Math.pow(10, 2); index < Math.pow(10, 3); index++) {
    if (check(index)) {
        if (
            Math.pow(Math.floor(Math.cbrt(reverse(index))), 3) ===
            reverse(index)
        ) {
            console.log(index);
        }
    }
}
