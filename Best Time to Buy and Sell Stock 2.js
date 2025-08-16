const maxProfit = (arr) => {
    if (arr.length < 2) return 0; // Can't make a profit with fewer than 2 prices

    let maxProfit = 0;

    for(let i = 0; i < arr.length; i++) {
        let currentPrice = arr[i];
        let nextPrice = arr[i + 1];

        if(currentPrice < nextPrice) {
            maxProfit += nextPrice - currentPrice;
        }
    }

    return maxProfit;
};
