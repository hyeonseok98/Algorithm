let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");

let [n, k] = input[0].split(" ");
const arr = input.map(Number).slice(1);

let cnt = 0;
for (let i = n - 1; i >= 0; i--) {
  cnt += parseInt(k / arr[i]);
  k %= arr[i];
}

console.log(cnt);
