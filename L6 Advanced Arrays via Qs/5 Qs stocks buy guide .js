// LeetCode qs 121 ;)

let prices = [2, 4, 1];



let maxProfit = 0;
for (i = 0; i < prices.length; i++) {
    for (j = i + 1; j < prices.length; j++) {
        if (prices[j] - prices[i] > maxProfit) {
            maxProfit = prices[j] - prices[i]
        }
    }
}
// It have nsqr time complexity

let maxProfit = 0;
let lowPrice = prices[0]
for (let i = 0; i < prices.length; i++) {
    if (lowPrice > prices[i]) { lowPrice = prices[i] }
    if (maxProfit < prices[i] - lowPrice) { maxProfit = prices[i] - lowPrice }
}
return maxProfit

console.log(maxProfit)


//