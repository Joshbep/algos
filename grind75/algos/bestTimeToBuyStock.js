// /**
//  * @param {number[]} prices
//  * @return {number}
//  */


/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.



Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
*/
//have to buy first before you sell
//
var maxProfit = function(prices) {
    let buy = prices[0];
    prices[0] = 0;
    let profit = 0;

    for(let i = 1; i < prices.length; i++){
      if(buy > prices[i]) {
        buy = prices[i];
        prices[i] = 0
    } else {
      profit = Math.max(prices[i] - buy, profit)
    }
  }
  return profit;
};


//given an array of prices
//prices[i] is the price of a given stock on the ith day

//need a buy variables set to first in array
//need max variable
//loop through array
//set sellprice to i
//set profit to sellprice - buy
//use math.max to update max
//use math .min to update buy variable

//return max
var maxProfit = function(prices) {
   let buy = prices[0]
   let max = 0

   for(let i = 1; i < prices.length; i++){
       let sellPrice = prices[i]
       let profit = sellPrice - buy

       max = Math.max(max, profit)

       buy = Math.min(buy, prices[i])
   }
   return max
};
