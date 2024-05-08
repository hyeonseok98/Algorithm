function solution(word) {
    return word.substr(Math.ceil(word.length / 2) - 1, word.length % 2 === 0 ? 2 : 1);
}