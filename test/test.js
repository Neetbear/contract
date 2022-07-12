function solution(s) {
    let answer = -1;
    let arr = [];
    for(let i = 0; i < s.length; i++) {
        if(i == 0) {
            arr.push(s[0]);
        } else if(arr[arr.length - 1] == s[i]) {
            arr.pop();
        } else {
            arr.push(s[i]);
        }
        // console.log(i, arr);
    }
    
    if(arr.length == 0) answer = 1;
    else answer = 0;
    // console.log(answer);
    return answer;
}

solution("baabaa");
solution("cdcd");