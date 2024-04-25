function solution(arr) {
    let answer = arr.reduce((arr,cur) => arr + cur,0) / arr.length
    return answer
}