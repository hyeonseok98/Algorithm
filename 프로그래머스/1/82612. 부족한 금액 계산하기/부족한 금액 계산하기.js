
function solution(price, money, count) {
    const totalCost = calculateTotalCost(price, count);
    return calculateRemainingAmount(totalCost, money);
}

function calculateTotalCost(price, count) {
    let totalCost = 0;
    for (let i = 1; i <= count; i++) {
        totalCost += price * i;
    }
    return totalCost;
}

function calculateRemainingAmount(totalCost, money) {
     const deficit = totalCost - money;
    return deficit > 0 ? deficit : 0;
}
