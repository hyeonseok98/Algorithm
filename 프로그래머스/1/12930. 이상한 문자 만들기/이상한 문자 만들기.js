function solution(s) {
    const wordArr = s.split(" ");
    const answer = wordArr.map((word, idx) => word.split("").map((char,idx) => idx % 2 === 0? char.toUpperCase() : char.toLowerCase()).join("")).join(" ");
    return answer;
}