// ép kiểu dữ liệu
// xuất thông báo cho người dùng nhập vào số A
let numberA = prompt("Mời cụ nhập vào numberA: ");
// check thử kiểu loại biến numberA
console.log(typeof numberA);
// thử thực hiện tính toán (nếu chưa ép kiểu)
let numberB = 5;
console.log(typeof numberB);
// cộng A với B
let kq = numberA + numberB;
console.log(`Kết quả A + B = ${kq}`);
console.log(typeof kq);
// vd a = 8, kq 85 --> sai, js hiểu là cộng chuỗi
// các phép tính khác
console.log(`A - B = %s`, numberA - numberB);
console.log(`A * B = %s`, numberA * numberB);
console.log(`A / B = %s`, numberA / numberB);
console.log(`A % B = %s`, numberA % numberB);

// ép kiểu dữ liệu nhập vào dùng prompt
// xuất thông báo cho người dùng nhập vào số C
let numberC = parseInt(prompt("Mời cụ nhập vào numberC: "));
console.log(numberC);
console.log(typeof numberC);
// hoặc đơn giản dùng hàm Number() để ép --> kiểu dữ liệu number
let numberD = Number(prompt("Mời cụ nhập vào numberD: "));
console.log(numberD);
console.log(typeof numberD);
console.log(numberD + numberB);
