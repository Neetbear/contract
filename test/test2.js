function solution(n) {
  var answer = '';
  const array = ['4','1','2']
  while (n>0){
      const remainder = n % 3
      answer = array[remainder] + answer;
      console.log(answer, remainder);
      if(remainder === 0){
          n = Math.floor((n-1)/3)
      }else{
          n = Math.floor(n/3)
      }
      console.log(n)
  }
  return answer;
}

solution(120);