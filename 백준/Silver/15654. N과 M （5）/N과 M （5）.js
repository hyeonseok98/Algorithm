let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");

let [N, M] = input[0].split(" ").map(Number);
let numArr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let selected = [];
let visited = new Array(N).fill(false);
let answer = "";

function dfs(depth) {
  if (depth === M) {
    for (let i of selected) answer += i + " ";
    answer += "\n";
    return;
  }

  for (let i = 0; i < N; i++) {
    if (visited[i]) continue;
    selected.push(numArr[i]);
    visited[i] = true;
    dfs(depth + 1);
    selected.pop();
    visited[i] = false;
  }
}

dfs(0);
console.log(answer);
