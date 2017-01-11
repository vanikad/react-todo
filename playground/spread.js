// function add(a, b){
//   return a + b;
// }
//
// console.log(add(1, 5));
// var toAdd = [5, 9];
// console.log(add(...toAdd));

// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram', 'Catlin'];
// var final = [3, ...groupA, groupB];
//
// console.log(final);

var person1 = ['Jen', 22];
var person2 = ['Vikram', 35];

function greeting(name, age){
  return ("Hi " + name + ", you are " + age);
}

console.log (greeting(...person1));
console.log (greeting(...person2));

var names = ['Jen', 'Cory'];
var final = ['Ion', ...names];

final.forEach(function (name){
    console.log("Hi " + name);
});
