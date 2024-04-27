function solution(x, n) {
    return Array(n).fill(x).map((num, idx) => num + (num * idx))
}