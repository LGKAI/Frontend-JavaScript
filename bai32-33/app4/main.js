// Phương thức reduce()
// Dựa trên một hàm xử lý -> tính toán và trả về một giá trị duy nhất sau tính toán
/*
Syntax: reduce(function, [initialValue]);
1. function: Một hàm để thực thi cho từng phần tử trong mảng
2. initialValue: Giá trị khởi tạo
*/

// Bài toán khi không dùng reduce()
let M1 = [3, 2, 3];
// Thực hiện tính tổng các phần tử trong mảng
let sum = 0;
for (let element of M1) {
  sum += element;
}
console.log("Tổng các phần tử trong mảng: " + sum);

// Khi dùng reduce()
/*
accumulator: Giá trị tích lũy, được cập nhật sau mỗi lần gọi hàm
currentValue: Giá trị hiện tại đang xử lý trong mảng
currentIndex: (Tùy chọn) Chỉ số của phần tử đang xử lý
array: (Tùy chọn) Mảng đang được reduce
*/
// let M1 = [3, 2, 3];
/*
initialValue: Giá trị khởi tạo của accumulator ban đầu
Nếu bỏ trống initialValue: 
  a. accumulator: tích lũy sẽ lấy giá trị đầu tiên trong mảng làm giá trị khởi tạo và sẽ bắt đầu thực hiện từ phần tử thứ 2
  b. Nếu mảng trống mà 0 có giá trị initialValue --> reduce() sẽ báo lỗi
*/
let sum2 = M1.reduce(
  // Tham số thứ 1: function
  (accumulator, currentValue, currentIndex, array) => {
    return accumulator + currentValue;
  }
  // Tham số thứ 2: initialValue
);
console.log(sum2);

// Rút gọn lại
let sum3 = M1.reduce((a, b) => a + b, 0);
console.log(sum3);

// Phương thức filter()
/*
Cú pháp: array.filter(function);
function(currentValue, [currentIndex] , [array])
Hàm được gọi với những đối số sau: 
currentValue: Giá trị hiện tại đang xử lý trong mảng
currentIndex: (Tùy chọn) Chỉ số của phần tử đang xử lý
array: (Tùy chọn) Mảng đang được duyệt
*/
let numbers = [1, 2, 3, 4, 5];
// Tìm những số chẵn trong mảng
let evenNumbers = numbers.filter(
  // Function
  (value, index, array) => value % 2 === 0
);
console.log(evenNumbers); // Output: [2, 4]
