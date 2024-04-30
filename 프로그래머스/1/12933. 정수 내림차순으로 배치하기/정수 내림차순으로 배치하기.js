function solution(n) {
    let strN = n + "";
    const sortedN = +strN.split("").sort().reverse().join("");
    
    return sortedN;
}