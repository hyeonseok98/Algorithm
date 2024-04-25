function solution(strings, n) {
    return strings.map(x => [...x][n] + x).sort().map(x => x.substring(1))
}
