function solution(arr) {
    const stack = [];
    let idx = -1
    
    for(let char of arr) {
        if(stack[idx] === char) {
            continue;
        }
        stack[++idx] = char  
    }
    return stack;
}