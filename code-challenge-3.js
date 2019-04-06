let bills = [ 124, 48, 268 ];

function findTip(arr) {
  let tipArray = [];
  let totalArray = [];
  for (let i = 0; i < arr.length; i++) {
    let currentBillTip = arr[i] * .2;
    tipArray.push(currentBillTip);
    totalArray.push(arr[i] + currentBillTip);
  }
  console.log(tipArray);
  console.log(totalArray);
}

findTip(bills);
