function solution(s){
    const length = s.length;
    if(length % 2 === 1 || s[0] === ")" || s[length-1] === "(") return false
    
    let stack = 0;
    for(let i = 0; i < length; i++) {
        s[i] === "(" ? stack ++ : stack--;
        
        if(stack < 0) return false;
    }
    return stack === 0
}