function chech(string) {
    if(string.length == 0) return string;
    
}
function solution(p) {
    var answer = '';
    let test = [];
    for(const element of p) {
        if(element == "("){
            test.push(1)
        } else test.push(-1)
    }
    console.log(test);
    return answer;
}