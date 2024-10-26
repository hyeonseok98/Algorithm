
function solution(number, limit, power) {
  return calculateAttackPower(number, limit, power);
}

function getDivisorCount(n) {
  let count = 0;
  const sqrtN = Math.sqrt(n);

  for (let i = 1; i <= sqrtN; i++) {
    if (n % i === 0) {
      count++;
      if (i !== n / i) {
        count++; 
      }
    }
  }

  return count;
}

function calculateAttackPower(number, limit, power) {
  let totalWeight = 0;

  for (let i = 1; i <= number; i++) {
    const divisorCount = getDivisorCount(i);
    const attackPower = divisorCount > limit ? power : divisorCount;
    totalWeight += attackPower;
  }

  return totalWeight;
}