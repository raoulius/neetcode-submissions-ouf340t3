class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buy = 0;
        let maxProfit = 0;

        for (let i = 0; i < prices.length; i++) {
            let profit = prices[i] - prices[buy];

            if (profit > maxProfit) {
                maxProfit = profit;
            }

            else if (prices[i] < prices[buy]){
                buy = i;
            }

            else if (maxProfit < 0) {
                return 0
            }
        }
        return maxProfit;
    }
}
