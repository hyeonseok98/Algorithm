let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");

let [N, M] = input[0].split(" ").map(Number);
let arr = [];
for (let i = 1; i <= N; i++) arr.push(i);
let visited = new Array(N).fill(false);
let selected = [];
let answer = "";

function dfs(depth, start) {
  if (depth === M) {
    let result = [];
    for (let i of selected) result.push(arr[i]);
    for (let k of result) answer += k + " ";
    answer += "\n";
    return;
  }

  for (let i = start; i < N; i++) {
    if (visited[i]) continue;
    selected.push(i);
    visited[i] = true;
    dfs(depth + 1, i + 1);
    selected.pop();
    visited[i] = false;
  }
}

dfs(0, 0);
console.log(answer);
