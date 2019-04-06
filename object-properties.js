
// objects and properties
// like an array but each element has its own name!
// order does not matter like in arrays

var john = {
  firstName: 'John',
  lastName: 'Sonmez',
  birthYear: 1990,
  familyMembers: ['Jane', 'Mark', 'Rob', 'Emily'],
  job: 'web dev',
  isMarried: false
};
console.log(john.familyMembers[2]);


// you can use dot notation to change properties of (mutate) an object
//
john.job = 'designer';
john['isMarried'] = true;
console.log(john);
