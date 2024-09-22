const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function solution(s, skip, index) {
    let result = [];
    const filtered = alphabet.split('').filter(char => !skip.includes(char));
    const length = filtered.length;

    for (const char of s) {
        const currentIndex = filtered.indexOf(char);
        const newIndex = (currentIndex + index) % length;
        result.push(filtered[newIndex]);
    }

    return result.join('');
}