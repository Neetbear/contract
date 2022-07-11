// function solution(n) {
//     var answer = '';
//     var x = n;
//     var l = 0;
//     for(let i = 1; x > 3**i; i++) {
//         x -= 3**i;
//         l = i;
//     }
//     console.log(x, l);
//     var arr = [];
//     for(let i = l; i >= 0; i--) {
//         let y = Math.floor(x / (3**(i)));
//         x = x - y * (3**(i));
//         arr.push(y);
//         if(i == 0) {
//             if(y == 3) answer += '4';
//             else if(y == 2) answer += '2';
//             else if(y == 1) answer += '1';
//         } else {
//             if(y == 2) answer += '4';
//             else if(y == 1) answer += '2';
//             else if(y == 0) answer += '1';
//         }
//     }
//     console.log(arr);
//     console.log(answer);
//     return answer;
// }


// 1 2 4 -> 3 = 1 - 3 
// 11 ... 44 -> 9 = 4 - 12
// 111 ... 444 -> 27 = 13 - 39
// 1111 ... 4444 -> 81 = 40 - 120
// 40 -> 1 -> 0*3**3 0*3**2 0*3**1 1*3**0 -> 1111
// 41 1112
// 42 1114
// 43 1121 0*3**3 0*3**2 1*3**1 1*3**0
// 100 -> 61 -> 2*3**3 0*3**2 2*3**1 1*3**0 -> 2
// 120 -> 0  -> 3*3**3 2*3**0 2*3**0 2*3**0 -> 4444

function solution(n) {
    let answer = '';
    let x = n;
    let l = 0;
    for(let i = 1; x > 3**i; i++) {
        x -= 3**i;
        l = i;
    }
    console.log(x, l);
    var arr = [];
    for(let i = l; i >= 0; i--) {
        let y = Math.floor(x / (3**(i)));
        x = x - y * (3**(i));
        arr.push(y);
        if(i == 0) {
            if(y == 3) answer += '4';
            else if(y == 2) answer += '2';
            else if(y == 1) answer += '1';
        } else {
            if(y == 2) answer += '4';
            else if(y == 1) answer += '2';
            else if(y == 0) answer += '1';
        }
    }
    console.log(arr);
    console.log(answer);
    return answer;
}
console.log(solution(120))