function solution(n) {
    let N = n.toString().split('');
    let answer = 0;
    N.forEach((num) => {
        answer += +num
    });
    return answer;
}
