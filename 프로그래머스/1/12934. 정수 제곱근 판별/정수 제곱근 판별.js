function solution(n) {
    let answer = 0;
    let sqrtN = Math.sqrt(n);
    (n % sqrtN) === 0 ? answer = Math.pow(sqrtN + 1,2) : answer = -1
    return answer
}