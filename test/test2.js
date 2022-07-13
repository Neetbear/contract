function solution(rows, columns, queries) {
    let answer = [];
    let nums = [];
    let num = 1;
    for(let i = 0; i < rows; i++) {
        let ele = [];
        for(let j = 0; j < columns; j++) { 
            ele.push(num);
            num++;
        }
        nums.push(ele);
    }

    for(let i =0; i < queries.length; i++) {
        let index = queries[i].map(x => x-1);
        let copyNum = nums.map(v => [...v]);
        let smallNum = 0; 
        for(let j = index[1]; j < index[3]; j++) {
            nums[index[0]][j+1] = copyNum[index[0]][j];
            if(smallNum == 0 || smallNum > copyNum[index[0]][j]) smallNum = copyNum[index[0]][j];
        }
        for(let j = index[0]; j < index[2]; j++) {
            nums[j+1][index[3]] = copyNum[j][index[3]];
            if(smallNum == 0 || smallNum > copyNum[j][index[3]]) smallNum = copyNum[j][index[3]];
        }
        for(let j = index[3]; j > index[1]; j--) {
            nums[index[2]][j-1] = copyNum[index[2]][j];
            if(smallNum == 0 || smallNum > copyNum[index[2]][j]) smallNum = copyNum[index[2]][j];
        }
        for(let j = index[2]; j > index[0]; j--) {
            nums[j-1][index[1]] = copyNum[j][index[1]];
            if(smallNum == 0 || smallNum > copyNum[j][index[1]]) smallNum = copyNum[j][index[1]];
        }
        answer.push(smallNum);
    }

    return answer;
}
solution(6, 6, [[2,2,5,4],[3,3,6,6],[5,1,6,3]]);