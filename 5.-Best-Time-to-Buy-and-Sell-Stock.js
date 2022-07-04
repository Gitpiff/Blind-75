// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// const maxProfit = (prices) => {
//     //buy first, however do not buy at the highest price, buy low sell high
//     //do not sell stock at a loos, or when given an array in descending order
//     //two pointers, one for when we buy, one for when we sell
//     let buy = prices[0];
//     let profit = 0;

//     //start iterating at index 1, index 0 was taken by buy var
//    for (let i = 1; i < prices.length; i ++) {
//        //if buy price is greater than the current price, reassing the var
//         if (buy > prices[i]) {
//             buy = prices[i]
//         }
//         //else calculate the max profit between the subtraction of the current price minus the buy var, and the current value in the profit var
//         else {
//             profit = Math.max(prices[i] - buy, profit)
//         }
//    }

//    return profit;
// }

//Solution 2
const maxProfit = (prices) => {
    //two ppointers
    let buy = 0;
    let sell = 1;
    let max_profit = 0;
    while (sell < prices.length) {
        if (prices[buy] < prices[sell]) {
            let profit = prices[sell] - prices[buy];

            max_profit = Math.max(max_profit, profit);
        } else {
            buy = sell;
        }

        sell ++;
    }

    return max_profit;
}

console.log(maxProfit([7,1,5,3,6,4]))