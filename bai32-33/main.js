// mảng trong js - tổng quan
let name1 = "Trang";
let name2 = "Hoa";
let name3 = "Lan";

// khai báo mảng rỗng
let arr1 = [];
console.log(arr1);
// tạo một mảng có sẵn các phần tử bên trong
let arr2 = [1, 2, 3, 4, "nam", true, [2, 3, 5]];
console.log(arr2);
console.log(typeof arr2);

// sử dụng array constructor
// khai báo mảng rỗng
let arr3 = new Array();
console.log(arr3);
// tạo một mảng có sẵn các phần tử bên trong
let arr4 = new Array(1, 2, 3, 4, "nam");
console.log(arr4);
// tạo mảng với độ dài xác định, các phần tử là undefined
let arrayWithLength = new Array(5);
// console.log(arrayWithLength);
// console.log(arrayWithLength[0]);
// console.log(arrayWithLength[1]);
// console.log(arrayWithLength[2]);
// console.log(arrayWithLength[3]);
// console.log(arrayWithLength[4]);

// truy xuất phần tử của mảng qua vị trí index
let arr5 = [4, 6, 8, 9];
console.log(arr5[2]);
console.log(arr5[3]);

// thuộc tính length
console.log(arr5.length);
console.log(arr4.length);

// gán, thay đổi giá trị cho mảng qua index
let arr6 = [5, 6, 7];
console.log("arr6 trước khi thay đổi: ");
console.log(arr6); // 5 6 7
arr6[1] = 10;
console.log("arr6 trước sau đổi: ");
console.log(arr6); // 5 10 7

// duyệt mảng
// cách 1: dùng vòng lặp for, có thể xem và sửa giá trị mảng
let arr7 = [3, 2, 3, 4, 5];
console.log(arr7);
for (let i = 0; i < arr7.length; i++) {
  console.log(arr7[i]);
  arr7[i] = arr7[i] * 2;
}
// sau khi thay đổi, xuất thử arr7
console.log(arr7);

// cách 2: for... of: chỉ có thể xem, không sửa được giá trị của mảng
let count = 0;
let arr8 = [1, 2, 3, 4, 5];
for (let element of arr8) {
  if (element % 2 === 0) {
    console.log(element);
    count++;
  }
  // element = 5;
}
console.log("Số lượng số chẵn có trong mảng: " + count);
console.log(arr8);
