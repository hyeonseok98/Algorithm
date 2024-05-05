function solution(arr, divisor) {
    let answer = arr.filter((num) => num % divisor === 0)
    answer = answer.sort((a,b) => a - b);
    if(answer.length === 0) answer.push(-1);
    return answer;
}