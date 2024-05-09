function solution(n) {
    let word = "수박";
    let answer = word.repeat(Math.floor(n/2))
    return n % 2 === 0 ? answer : answer + "수"
}