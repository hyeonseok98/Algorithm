function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function solution(n, m) {
    const gcd_value = gcd(n, m);
    const lcm_value = lcm(n, m);
    return [gcd_value, lcm_value];
}