// var và let, hoisting trong js
console.log("Giá trị của biến c = " + c);
// khởi tạo c
var c = 9; // undefined
//let c = 9; // cannot access 'c' before initialization
// cách js hiểu
/*
var c;
console.log("Giá trị của biến c = " + c);
c = 9; */

// phạm vi sử dụng (scope)
/*
var: có phạm vi là function-scope
let, const: có phạm vi là block-scope
*/
// var
function exampleVar() {
  if (true) {
    var y = 20; // khởi tạo y nằm trong phạm vi block scope
    console.log(`${y} trong block scope`);
  }
  console.log(`${y} trong function scope`);
}
exampleVar();
// js hiểu
function exampleVar() {
  var y; // hoisting
  if (true) {
    y = 20;
    console.log(`${y} trong block scope`);
  }
  console.log(`${y} trong function scope`);
}
exampleVar();

// let, const
function exampleLet() {
  if (true) {
    let b = 40;
    console.log(`${b} trong block scope`);
  }
  console.log(`${b} trong function scope`); // lỗi
}
exampleLet();

// re-declaration
/*
var: có thể khai báo lại một biến mà không gây ra lỗi
let: không thể khai báo lại một biến trong cùng một phạm vi
*/
var diemToan = 4;
var diemToan = 8.5;
let diemVan;
// let diemVan; // lỗi

// hoisting in function
// 1. function declaration: có hoisting, có thể gọi hàm trước khi nó được định nghĩa
hoistedFunction();
function hoistedFunction() {
  console.log("Hello");
}
// engine của trình duyệt đọc
function hoistedFunction() {
  console.log("Hello");
}
hoistedFunction();

// 2. function expression: không có hoisting, phải gọi hàm sau khi định nghĩa
// nonHoistedFunction(); // lỗi
let nonHoistedFunction = function () {
  console.log("Hello");
};

// 3. arrow function: không có hoisting, phải gọi hàm sau khi đã định nghĩa
// arrowFunction(); // lỗi
let arrowFunction = () => {
  console.log("Hello");
};
