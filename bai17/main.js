// toán tử 3 ngôi
let number = -10;
let message = number >= 0 ? "Số dương" : "Số âm";
console.log(message);
// nếu sử dụng if else thông thường
if (number >= 0) {
  console.log("Số dương");
} else {
  console.log("Số âm");
}

let number2 = 10;
console.log(number2 % 2 === 0);
let message2 = number2 % 2 === 0 ? "Số chẵn" : "Số lẻ";
console.log(message2);

let dtb = parseFloat(prompt("Mời cụ nhập điểm: "));
let xepLoai =
  dtb >= 8 ? "Giỏi" : dtb >= 6.5 ? "Khá" : dtb >= 5 ? "Trung bình" : "Yếu";
console.log(`Xếp loại của học sinh: ${xepLoai}`);
