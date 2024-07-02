function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;
    
    sizes.forEach(([w, h]) => {
        const [maxSide, minSide] = w > h ? [w, h] : [h, w];
        maxWidth = Math.max(maxWidth, maxSide);
        maxHeight = Math.max(maxHeight, minSide);
    });
    
    return maxWidth * maxHeight;
}