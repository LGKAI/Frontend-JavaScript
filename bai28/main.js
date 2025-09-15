// đệ quy trong js
// tính giai thừa
function giaiThua(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * giaiThua(n - 1);
  }
}

let ketQua = giaiThua(5);
console.log(ketQua);

// tính fibonacci
function f(n) {
  if (n <= 2) {
    return 1;
  } else {
    return f(n - 1) + f(n - 2);
  }
}

let ketQua2 = f(11);
console.log(ketQua2);
