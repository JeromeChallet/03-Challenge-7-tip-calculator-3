const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}
console.log("bills", bills);
console.log("tips", tips);
console.log("totals", totals);

function calAverage(arr) {
  //remember to asign 0 first
  //remember u can use an outside var as long as its declared before the loop
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    console.log("sum: ", sum);
  }
  let average = sum / arr.length;
  return average;
}

console.log(calAverage(bills));
console.log(calAverage(tips));
console.log(calAverage(totals));
