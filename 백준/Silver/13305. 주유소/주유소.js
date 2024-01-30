let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");

const cityNum = Number(input[0]);
const wayLength = input[1].split(" ").map(Number);
const oilPrice = input[2].split(" ").map(Number);

let oilType = oilPrice[0];
let totalPrice = BigInt(0);
for (let i = 0; i < cityNum - 1; i++) {
  totalPrice += BigInt(oilType) * BigInt(wayLength[i]);
  if (oilPrice[i] > oilPrice[i + 1] && oilType > oilPrice[i + 1]) {
    oilType = oilPrice[i + 1];
  }
}
console.log(String(totalPrice));
