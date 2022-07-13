function solution(orders, course) {
    var answer = [];
    for(let i = 0; i < orders.length; i++) {
        orders[i] = [...orders[i]].sort();
    }
    console.log(orders);
    for(let i = 0; i < course.length; i++) {
        let leng = course[i];
        let allCourse = [];
        for(let j = 0; j < orders.length; j++) {
            orders[j]
        }
    }
    return answer;
}

solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2,3,4])
solution(["XYZ", "XWY", "WXA"], [2,3,4])

