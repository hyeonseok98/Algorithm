function solution(s) {
    const numArray = s.split(" ").sort((a,b) => a - b);
    console.log(numArray)
    const answer = `${numArray[0]} ${numArray[numArray.length-1]}`
    return answer;
}