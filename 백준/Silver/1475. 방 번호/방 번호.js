let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");

let N = input[0];
let length = N.length;
let numExist = Array(9).fill(0);

for (let i = 0; i < length; i++) {
  if (N[i] == "6" || N[i] == "9") {
    numExist[6] += 0.5;
  } else {
    numExist[N[i]] += 1;
  }
}

let answer = Math.max(...numExist);
console.log(Math.ceil(answer));
