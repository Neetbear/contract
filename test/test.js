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
let indexArr = [];
for(let i = 0; i < 10; i++) {
    indexArr.push(i);
}
console.log(indexArr)
indexArr.sort(() => Math.random() - 0.5);
console.log(indexArr)