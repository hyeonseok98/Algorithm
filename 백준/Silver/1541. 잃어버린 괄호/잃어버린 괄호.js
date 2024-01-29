let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString();

const num = input.split("-");
let answer = 0;
for (let i = 0; i < num.length; i++) {
  let sum = num[i]
    .split("+")
    .map(Number)
    .reduce((prev, curr) => prev + curr);
  if (i === 0) answer += sum;
  else answer -= sum;
}

console.log(answer);
