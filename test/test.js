// let board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]];

// console.log(board[1][2]);
// console.log(board.length);
// // [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]	
// // 1,5,3,5,1,2,1,4
// // 4 3 1 1 3 2 0 4
// // 0 0 0 0 0
// // 0 0 1 0 3
// // 0 2 5 0 1
// // 4 2 4 4 2
// // 3 5 1 3 1
// let indexArr = [];
// for(let i = 0; i < 10; i++) {
//     indexArr.push(i);
// }
// console.log(indexArr)
// indexArr.sort(() => Math.random() - 0.5);
// console.log(indexArr)

function solution(dartResult) {
    var answer = 0;
    var score = [];
    var index = 0;
    for(let i = 0; i < dartResult.length; i++) {
        if(Number(dartResult[i])) {
            score[index] = Number(dartResult[i]);
            if(dartResult[index + 1] == "D") {
                score[index] = score[index] ** 2;
                if(dartResult[index + 2] == "*") {
                    if(index > 0) {
                        score[index] = score[index] * 2;
                        score[index - 1] = score[index - 1] * 2;
                    } else if(index == 0) {
                        score[index] = score[index] * 2;
                    }
                    i += 2;
                } else if(dartResult[index + 2] == "#") {
                    score[index] = score[index] * (-1);
                    i += 2;
                } else {
                    i += 1;
                }
            } else if(dartResult[index + 1] == "T") {
                score[index] = score[index] ** 3;
                if(dartResult[index + 2] == "*") {
                    if(index > 0) {
                        score[index] = score[index] * 2;
                        score[index - 1] = score[index - 1] * 2;
                    } else if(index == 0) {
                        score[index] = score[index] * 2;
                    }
                    i += 2;
                } else if(dartResult[index + 2] == "#") {
                    score[index] = score[index] * (-1);
                    i += 2;
                } else {
                    i += 1;
                }
            }
            index++;
        }
    }
    for(const element of score) {
        answer += Number(element);
    }
    return answer;
}