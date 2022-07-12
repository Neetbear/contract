function solution(rows, columns, queries) {
    let answer = [];
    let nums = [];
    let num = 1;
    for(let i = 1; i <= rows * columns; i++) {
        nums.push(i);
    }
    console.log(nums);
    for(let i = 0; i < queries.length; i++) {
        let lastNum, smallNum;

        answer.push(smallNum);
    }
    
    return answer;
}

solution(6, 6, [[2,2,5,4],[3,3,6,6],[5,1,6,3]]);

// for(let i = 0; i < queries.length; i++){
//     let lastNum = 0; 
//     let smallNum = 0;
//     for(let j = queries[i][0]-1; j < queries[i][2]-1; j++){
//         lastNum = nums[queries[i][1]-1][j+1];
//         nums[queries[i][1]-1][j+1] = nums[queries[i][1]-1][j]; 
//         if(smallNum == 0 || smallNum > lastNum) smallNum = lastNum;
//     }
//     nums[queries[i][1]-1][queries[i][1]] = lastNum
//     queries[i][3]
//     for(let j = queries[i][1]-1; j < queries[i][3]-1; j++) {
//         lastNum = nums
//     }
//     answer.push(smallNum);
// }