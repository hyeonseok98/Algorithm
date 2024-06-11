function solution(A,B){
    const sortedA = A.sort((a,b) => a - b);
    const sortedB = B.sort((a,b) => b - a);
    
    const answer = sortedA.reduce((acc, cur, idx) =>  acc + cur * sortedB[idx], 0);
    return answer;
}