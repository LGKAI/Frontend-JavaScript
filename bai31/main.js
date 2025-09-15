// date time in js
// 1. Tạo đối tượng Date: sử dụng new Date() để tạo 1 đối tượng Date mới
let currentDate = new Date();
console.log(typeof currentDate);
console.log(currentDate);

// 2. Các phương thức lấy thông tin thời gian
// Lấy năm, tháng, ngày, giờ, phút, giây
let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1;
let day = currentDate.getDate();
let hour = currentDate.getHours();
let minute = currentDate.getMinutes();
let second = currentDate.getSeconds();
console.log("Năm hiện tại: " + year);
console.log("Tháng hiện tại: " + month);
console.log("Ngày hiện tại: " + day);
console.log("Giờ hiện tại: " + hour);
console.log("Phút hiện tại: " + minute);
console.log("Giây hiện tại: " + second);

// 3. Timestamp: là 1 đại diện cho 1 điểm cụ thể trong thời gian, tính bằng ms từ mốc 0
// Mốc thời gian 0: 00:00:00 ngày 1 tháng 1 năm 1970
let timestamp1 = new Date(0);
console.log(timestamp1);
let currentTimeStamp = currentDate.getTime();
console.log(currentTimeStamp);
