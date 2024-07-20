function solution(s) {
    const map = new Map();
    
    return s.split("").map((char, index) => {
        if (map.has(char)) {
            const prevIndex = map.get(char);
            map.set(char, index);
            return index - prevIndex;
        } else {
            map.set(char, index);
            return -1;
        }
    });
}
