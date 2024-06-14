function solution(n) {
    const numberOfNOne = NumberOfOne(n)
    let nextNumber = n+1;
    
    while(numberOfNOne !== NumberOfOne(nextNumber)) {
        nextNumber++;
    }
    return nextNumber;
}


function NumberOfOne(number) {
    return number.toString(2).match(/1/g).length;
}