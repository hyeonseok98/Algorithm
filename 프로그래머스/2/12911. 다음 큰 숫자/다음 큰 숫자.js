function solution(n) {
    const targetNumber = NumberOfOne(n)
    let nextNumber = n+1;
    
    while(targetNumber !== NumberOfOne(nextNumber)) {
        nextNumber++;
    }
    return nextNumber;
}


function NumberOfOne(number) {
    return number.toString(2).match(/1/g).length;
}