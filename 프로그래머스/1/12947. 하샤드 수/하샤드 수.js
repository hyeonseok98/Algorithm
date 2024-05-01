function solution(x) {
    let divideX = String(x).split("").map(Number); 
    let sum = divideX.reduce((acc, cur) => acc + cur, 0);
    return x % sum === 0;
}
