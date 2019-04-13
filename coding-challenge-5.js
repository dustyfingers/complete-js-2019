// part one
var john = {
  name: 'John Smith',
  bills: [ 124, 48, 268, 180, 42 ],
  calcTips: () => {
    // this method should output two arrays
    // an array containing just the tips
    // an array containing final amount due for each bill
    this.tipsArray = [];
    this.totalsArray = [];
    for (let i = 0; i < this.bills.length; i++) {
      let currentBill = this.bills[i];
      switch (currentBill) {
        case (0 < currentBill < 50):
          var percentage = .2;
          break;
        case (currentBill >= 50 && currentBill < 200):
          var percentage = .15;
          break;
        case (currentBill >= 200):
          var percentage = .10;
          break;
        default:
          break;
      }
      this.tipsArray[i] = bill * percentage;
      this.totalsArray[i] = bil + this.tips[1];
    }
  }
};


john.calcTips();
console.log(john);
