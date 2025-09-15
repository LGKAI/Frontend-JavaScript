// hàm isNan, Number

// hàm Number(value) --> chuyển value sang số
//--> nếu không chuyển được trả về NaN
var str = "123";
var num = Number(str);
console.log(`num, kiểu dữ liệu ${typeof num}`); // number

var invalidStr = "abc";
var invalidNum = Number(invalidStr);
console.log(invalidNum);
// NaN (Not a Number) do chuỗi không thể chuyển đổi thành số

// isNaN(value)
console.log(isNaN("abc")); // true
console.log(isNaN("123")); //false --> Do string "123" --> chuyển đổi được thành số
console.log(isNaN(123)); // false
console.log(isNaN("NaN")); // true
console.log(isNaN(undefined)); // true
console.log(isNaN({})); // true
console.log(isNaN("blabla")); // true
console.log(isNaN(true)); // false, this is coerced to 1
// note thử chuyển true sang số
let convertTrue = Number(true);
console.log(`giá trị sau chuyển là: ${convertTrue}`); // 1
console.log(isNaN(null)); // false, this is coerced to 0
console.log(isNaN("")); // false, this is coerced to 0
console.log(isNaN(" ")); // false, this is coerced to 0

// Number.isNaN: được giới thiệu trong ECMAScript 2015 (ES6)
// phương thức này chỉ trả về `true` nếu value hoặc biểu thức truyền vào có giá trị NaN
console.log(Number.isNaN(NaN));
// <- true, NaN is NaN
console.log(Number.isNaN("pony" / "foo"));
// <- true, 'pony'/'foo' is NaN, NaN is NaN
let check = "pony" / "foo";
console.log(`giá trị của biến check: ${check}`);

console.log(Number.isNaN(0 / 0)); // true
console.log(Number.isNaN(Number.NaN)); // true
console.log(Number.isNaN({})); // <- false, {} is not NaN
console.log(Number.isNaN("ponyfoo")); // <- false, 'ponyfoo' is not NaN
