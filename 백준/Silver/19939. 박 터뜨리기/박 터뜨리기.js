let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");

let [N, K] = input[0].split(" ").map(Number);

let total = 0;
for (let i = 1; i <= K; i++) {
  total += i;
}

if (N < total) console.log(-1);
else {
  N = N - total;
  if (N % K === 0) console.log(K - 1);
  else console.log(K);
}
