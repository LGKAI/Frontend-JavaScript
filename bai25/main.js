// function (hàm) trong js
/*
Bài toán: Tính tổng 2 số
a. 7, 5 
b. 9, 6
c. 10, 5
*/

// 1. Khai báo function
// Bước 1: Khai báo
function tenFunction() {
  // Mã lệnh thực hiện một nhiệm vụ nào đó
}
// Bước 2: Gọi hàm - khi cần sử dụng
tenFunction();
// 2. Ví dụ đơn giản
function xinChao() {
  console.log("Chào mừng đến với tuhoc.cc");
}
xinChao();
xinChao();

// 3. Function với tham số (parameters)
// let inputName = prompt("Mời nhập vào tên của bạn:");
// Khai báo hàm
function xinChao2(name) {
  console.log(`Chào mừng ${name} đến với tuhoc.cc`);
}
// Gọi hàm
// xinChao2(inputName);
xinChao2("Trần như nhộng");
console.log(xinChao2("Trần như nhộng"));

// 4. Ví dụ 2 về parameters
function tinhTong(a, b) {
  // let ketQua = a + b;
  // return ketQua;
  return a + b;
}
console.log(tinhTong(5, 7));
let diemToan = 8;
let diemVan = 9.5;
let tongDiem = tinhTong(diemToan, diemVan);
console.log(`tongDiem = ${tongDiem}`);
console.log(`DTB = ${tongDiem / 2}`);

// Chú ý: thân hàm nếu không có return thì giá trị trả về là undefined

// 5. Truyền giá trị mặc định cho parameters
console.log(tinhTong(10));
function tinhTong2(a = 0, b = 0) {
  return a + b;
}
console.log(tinhTong2(5));
