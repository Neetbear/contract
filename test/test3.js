// 시간 초과 
// function solution(numbers, target) {
//     let answer = 0;
//     let test = [];
//     console.log(test);
//     for(let i = 0; i < numbers.length; i++) {
//         for(let j = 0; j < test.length; j++) {
//             test.splice(j, 1, test[j]+ numbers[i], test[j] - numbers[i]);
//             j++;
//         }
//         if(test.length == 0) test.push(numbers[i], -numbers[i]);
//     }
//     console.log(test);
//     for(let i = 0; i < test.length; i++) {
//         if(test[i] == target) answer++;
//     }
//     console.log(answer);
//     return answer;
// }

function loop(startI, numbers, target) {
    return (function recuresive(num, index) {
        if (index === numbers.length) {
            if (num === target) {
                return 1;
            } else {
                return 0;
            }
        }
        let num1 = num + numbers[index];
        let num2 = num - numbers[index];
        return recuresive(num1, index + 1) + recuresive(num2, index + 1);
    })(0, startI);
}

function solution(numbers, target) {
    let answer = loop(0, numbers, target);
    console.log(answer);
    return answer;
}

solution([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 2)