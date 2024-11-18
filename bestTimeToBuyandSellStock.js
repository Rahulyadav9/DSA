/*
  Input: prices = [7,1,5,3,6,4]
  Output: 5
  Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
  Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
*/

const prices = [7,1,5,3,6,4];
let max=0;
let min = prices[0];
const maxProfit = (){
   for(let i in prices){
       min = Math.min(min, prices[i]);
       max = Math.max(max, prices[i]-min);
   }
   return max;
}
maxProfit();
