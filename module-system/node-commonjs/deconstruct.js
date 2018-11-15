let obj = {
  a: 10,
  b: 20,
  add: function () {
    console.log('sum = ', x + y);
  }
};

let b = 30;

// let a = obj.a;
// let add = obj.add;
let {a, add} = obj; // 위 두 식과 같다.

adder(a, b);
