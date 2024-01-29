let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");

const num = Number(input[0]);
const time = input[1].split(" ").map(Number);

time.sort((i, j) => i - j);

let sum = 0;
let waitingTime = 0;
for (let i = 0; i < num; i++) {
  sum += time[i];
  waitingTime += sum;
}

console.log(waitingTime);
