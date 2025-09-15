// cách xuất dữ liệu với biến trong js
let soA = 25;
let soB = 5;
// cách 1
console.log("Căn bậc hai của " + soA + " là: " + soB);
// cách 2
console.log("Căn bậc hai của", soA, "là:", soB);
// cách 3
console.log(`Căn bậc hai của ${soA} là: ${soB}`);
// cách 4
console.log(`Căn bậc hai của %s là: %s`, soA, soB);

// luyện tập
let a = 4,
  b = 3,
  kq = a * b;
console.log("Kết quả: " + a + " nhân với " + b + " bằng " + kq);
console.log("Kết quả:", a, "nhân với", b, "bằng", kq);
console.log(`Kết quả: ${a} nhân với ${b} bằng ${kq}`);
console.log(`Kết quả: %s nhân với %s bằng %s`, a, b, kq);

// các phép toán cơ bản
let tong = a + b;
let hieu = a - b;
let tich = a * b;
let thuong = a / b;
let soDu = a % b;
console.log("Tổng 2 số: " + tong);
console.log("Hiệu 2 số: " + hieu);
console.log("Tích 2 số: " + tich);
console.log("Thương 2 số: " + thuong);
console.log("Số dư phép chia a cho b: " + soDu);

// ưu tiên ()
let diemToan = 9.5;
let diemVan = 8.75;
let dtb = (diemToan + diemVan) / 2;
console.log(dtb);

// right to left
let x = (y = 25);
// left to right
let c = 25 - 7 + 8 - 1;
