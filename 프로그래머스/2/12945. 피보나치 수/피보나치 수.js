function solution(n) {
    const MOD = 1234567;
    if (n === 0) return 0;
    if (n === 1) return 1;

    let prev1 = 0;
    let prev2 = 1;
    let answer;

    for (let i = 2; i <= n; i++) {
        answer = (prev1 + prev2) % MOD;
        prev1 = prev2;
        prev2 = answer;
    }

  return answer;
}