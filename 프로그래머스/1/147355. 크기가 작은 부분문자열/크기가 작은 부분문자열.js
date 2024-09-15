function solution(t, p) {
    let count = 0;
    const pLength = p.length; 
    const strLength = t.length - pLength;
    
    for (let i = 0; i <= strLength; i++) {
        const part = t.substring(i, i + pLength); 
        if (part <= p) {
            count++;
        }
    }

    return count;
}