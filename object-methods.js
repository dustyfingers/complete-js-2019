// functions attached to objects are called methods
//
var john = {
  firstName: 'John',
  lastName: 'Sonmez',
  birthYear: 1990,
  familyMembers: ['Jane', 'Mark', 'Rob', 'Emily'],
  job: 'web dev',
  isMarried: false,
  calcAge: function() {
    // 'this' refers to the current object
    this.age = 2019 - this.birthYear;
  }
};
john.calcAge()
console.log(john);
