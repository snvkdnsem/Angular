// // const service = require('./service');
//
// console.log(service);
// // service가 가리키는것은 ==> { add: [Function: add], say: [Function: say] }
//
// console.log(service.add(2, 3));
// console.log(service.say('John'));

const {add, say} = require('./service');

console.log(add(2, 3));
console.log(say('John'));
