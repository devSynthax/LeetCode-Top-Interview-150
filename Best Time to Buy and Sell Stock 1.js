const maxProfit = (arr) => {
    if (arr.length < 2) return 0; // Can't make a profit with fewer than 2 prices

    let buyPrice = arr[0];
    let maxProfit = 0;

    for (let i = 1; i < arr.length; i++) {
        let currentPrice = arr[i];

        // Calculate profit if sold today
        let profit = currentPrice - buyPrice;

        // Update maxProfit if this profit is higher
        maxProfit = Math.max(maxProfit, profit);

        // Update buyPrice if currentPrice is lower
        if (currentPrice < buyPrice) {
            buyPrice = currentPrice;
        }
    }

    return maxProfit;
};
