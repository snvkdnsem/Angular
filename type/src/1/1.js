// Type을 명시하고 사용하는 JavaScript == TypeScript
var a = 10; // : number ==>자료형
var b = 20;
var burger = 'hamburger', // String
calories = 300, // Numeric
tasty = true; // Boolean
// Alternatively, you can omit the type declaration:
// var burger = 'hamburger';
// The function expects a string and an integer.
// It doesn't return anything so the type of the function itself is void.
// function add(a: number, b: number) {
//   return a + b;
// }
//
// var result = add();
// console.log(result);
function speak(food, energy) {
    console.log("Our " + food + " has " + energy + " calories.");
}
speak(burger, calories);
speak('', 100);
//# sourceMappingURL=1.js.map