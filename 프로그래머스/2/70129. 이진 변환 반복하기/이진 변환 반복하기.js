function solution(s) {
    let zeroCount = 0;
    let conversionCount = 0;

    while (s !== "1") {
        const zeroes = (s.match(/0/g) || []).length;
        zeroCount += zeroes;

        const newSLength = s.length - zeroes;
        s = newSLength.toString(2);
        conversionCount++;
    }

    return [conversionCount, zeroCount];
}