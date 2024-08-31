function solution(a, b, n) {
    let totalBottles = 0;

    while (n >= a) {
        let newBottles = Math.floor(n / a) * b; 
        totalBottles += newBottles;        
        n = (n % a) + newBottles;
    }
    
    return totalBottles;
}