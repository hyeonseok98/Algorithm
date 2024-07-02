function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;
    
    sizes.forEach(size => {
        let [w, h] = size;
        
        if (w < h) {
            [w, h] = [h, w];
        }
        maxWidth = Math.max(maxWidth, w);
        maxHeight = Math.max(maxHeight, h);
    });
    return maxWidth * maxHeight;
}