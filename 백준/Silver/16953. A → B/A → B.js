let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");

let [num, target] = input[0].split(" ").map(Number);

let count = 1;
while (num <= target) {
  if (num === target) break;

  if (target % 2 === 0) target = parseInt(target / 2);
  else if (target % 10 === 1) target = parseInt(target / 10);
  else break;

  count++;
}

if (num === target) console.log(count);
else console.log(-1);
