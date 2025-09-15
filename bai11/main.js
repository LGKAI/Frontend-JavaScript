// toán tử logic
let i = 7;
// kiểm tra xem i > 0 và i < 10 không?
console.log(i > 0 && i < 10);
// kiểm tra xem i > 0 và i < 10 không?
console.log(i > 0 || i < 10);
// phủ định
console.log(!(i > 0 || i < 10));

// bài tập
let PI = Math.PI;
console.log(PI);
let r = Number(prompt("Nhập bán kính của hình tròn"));
console.log(r);
let chuVi = 2 * PI * r;
let dienTich = PI * r * r;
console.log("Chu vi đường tròn = " + chuVi);
console.log("Diện tích hình tròn = " + dienTich);

let a = Number(prompt("Nhập chiều dài hình chữ nhật:"));
let b = Number(prompt("Nhập chiều rộng hình chữ nhật:"));
let chuVi2 = (a + b) * 2;
let dienTich2 = a * b;
console.log("Chu vi hình chữ nhật = " + chuVi2);
console.log("Diện tích hình chữ nhật = " + dienTich2);

let diemToan = Number(prompt("Nhập điểm môn toán:"));
let diemVan = Number(prompt("Nhập điểm môn văn:"));
let diemAnh = Number(prompt("Nhập điểm môn anh:"));
let dtb = (diemToan + diemVan + diemAnh) / 3;
console.log("Điểm trung bình = " + dtb.toFixed(2));
