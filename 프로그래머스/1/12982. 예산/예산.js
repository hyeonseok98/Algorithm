function solution(d, budget) {
    let idx = 0;
    d.sort((a, b) => a - b)

    for(let expense of d) {
        if(d[idx] > budget) break;
        budget -= expense;
        idx++;
    }
    return idx;
}

