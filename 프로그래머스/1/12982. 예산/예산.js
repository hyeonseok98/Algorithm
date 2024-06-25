function solution(d, budget) {
    let idx = 0;
    d.sort((a, b) => a - b)

    for(let i of d) {
        if(d[idx] > budget) continue;
        budget -= i;
        idx++;
    }
    return idx;
}