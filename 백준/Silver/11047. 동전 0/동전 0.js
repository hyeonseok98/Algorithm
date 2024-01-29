let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");

let [N, total] = input[0].split(" ");
const coinType = input.map(Number).slice(1);

let count = 0;
for (let i = N - 1; i >= 0; i--) {
  count += parseInt(total / coinType[i]);
  total %= coinType[i];
}

console.log(count);
