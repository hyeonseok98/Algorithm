function solution(s){
    const stack = new Array(s.length);
    let idx = -1;
    
    for(let char of s) {
        if(stack[idx] === char && idx >= 0) {
            idx--;        
        } else {
        stack[++idx] = char;
        }
    }
    return idx === -1 ? 1 : 0;
    
}