//! Boyer-Moore

//? Tốt cho những văn bản ngôn ngữ thong thường,kém cho tệp nhị phân
//? Nhanh hơn rất nhiều so với vét cạn vì thực hiện k khớp thì nhảy cách 1 đoạn chứ k duyệt tuần tự

//? Trường hợp tệ với T =  "aaaaaaaa" P = "baaaa"

const T = "this place it was brighter than tomorrow",
    P = "is peace";

// const T = "in carnage i bloom like a flower in the dawn",
//     P = "in";

// const T = "a string searching example is standard",
//     P = "example";

//! Tìm vị trí xuất hiện cuối cùng của một phần tử trong chuỗi
function charInString(s, c) {
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            return s.length - 1 - i;
        }
    }
    return -1;
}

function Last_Occurrence(string, P) {
    //! Mảng các kí tự của mẫu
    let a = [];
    a.push(string[0]);
    for (let i = 1; i < string.length; i++) {
        if (!a.includes(string[i])) {
            a.push(string[i]);
        }
    }
    // console.log(a);
    //! Mảng vị trí cuối (lần xuất hiện cuối của kí tự T trong P)
    let L = [];
    for (let i = 0; i < a.length; i++) {
        let tmp = charInString(P.split("").reverse().join(""), a[i]);
        L.push(tmp);
    }

    let result = {};

    a.map((item, index) => {
        return (result[item] = L[index]);
    });

    return result;
}

var Last_Occurrence_Table = Last_Occurrence(T, P);

//! Bảng x, L(x)
console.log(Last_Occurrence_Table);

//!Boyer_Moore

function Boyer_Moore(t, p) {
    let i = p.length - 1;
    let j = p.length - 1;
    let count = 0;

    while (i <= t.length) {
        if (t[i] === p[j]) {
            if (j === 0) {
                return {
                    viTri: i,
                    count: count,
                };
            } else {
                i = i - 1;
                j = j - 1;
            }
        } else {
            let l = Last_Occurrence_Table[t[i]];

            i = i + p.length - Math.min(j, 1 + l);

            j = p.length - 1;
        }
        count++;
    }

    return {
        viTri: -1,
        count: count,
    };
}

//! Vị trí tìm thấy sự xuất hiện của chuỗi con từ count  -> count + p.length
console.log(Boyer_Moore(T.split(""), P.split("")));
