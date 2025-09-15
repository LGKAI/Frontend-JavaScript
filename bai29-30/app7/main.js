// split()
// string.split(separator, limit);
/*
1. string: chuỗi gốc cần chia
2. separator: chuỗi để xác định vị trí thực hiện tách
nó có thể là một ký tự hoặc một biểu thức chính quy
3. limit (tùy chọn): giới hạn số lượng phần tử trong mảng kết quả
*/
let student = "Hoa,Lan,Huệ,Trung";
let arr = student.split(",");
console.log(arr);
// giới hạn phần tử mảng
let arr2 = student.split(",", 3);
console.log(arr2);
// nếu nhập vào "" thì sẽ tách rời từng ký tự -> mảng
let str = "abcdefgh 1234";
let arr3 = str.split("");
console.log(arr3);
