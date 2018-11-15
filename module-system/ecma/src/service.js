'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function add(a, b) {
  // add 함수
  return a + b;
}

function say(name) {
  // say 함수
  return 'Hi ' + name + '!';
}

/*
  노드가 채택한 모듈 시스템 기술 코드
*/

// console.log(exports === module.exports); // true, exports는 module에 속해있다.
// exports.add = add;
// exports.say = say;

// module.exports = {
//   add,
//   say
// }

/*
  ECMA가 채택한 모듈 시스템 기술 코드
*/
exports.add = add;
exports.say = say;
//# sourceMappingURL=service.js.map
