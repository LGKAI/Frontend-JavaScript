// xuất thông báo cho người dùng nhập điểm
let dtb = Number(prompt("Mời cụ nhập điểm:"));

// if else
if (dtb >= 5.0) {
  console.log("Bạn đã đỗ");
} else {
  console.log("Bạn đã tạch");
}

// if - else if - else
if (dtb <= 10 && dtb >= 8) {
  console.log("Học sinh giỏi");
} else if (dtb < 8 && dtb >= 6.5) {
  console.log("Học sinh khá");
} else if (dtb < 6.5 && dtb >= 5) {
  console.log("Học sinh TB");
} else if (dtb >= 0 && dtb < 5) {
  console.log("Học sinh yếu");
} else {
  console.log("Bạn nhập điểm tào lao");
}
