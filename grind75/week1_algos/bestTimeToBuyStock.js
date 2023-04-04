// /**
//  * @param {number[]} prices
//  * @return {number}
//  */

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


var maxProfit = function(prices) {
  let buy = prices[0]
  let max = 0
  for(let i=1; i < prices.length; i++){
    const sellPrice=prices[i];
    const profit=sellPrice-buy
    max=Math.max(max, profit)

    buy = Math.min(buy, prices[i])
  }
  return max
};
