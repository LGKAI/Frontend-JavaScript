// Phương thức sort()
// 1. Khi không truyền compareFunction
let M1 = ["b", "a", "c"];
// Để xem giá trị unicode dùng charCodeAt()
console.log("b".charCodeAt());
// Duyệt mảng để xem
for (let element of M1) {
  // console.log(element);
  console.log(`${element} có mã unicode là: ${element.charCodeAt()}`);
}
let sortedM1 = M1.sort();
console.log(sortedM1);

/*
Trường hợp phần tử có nhiều ký tự: So sánh các ký tự đầu để xếp
Nếu ký tự giống nhau thì so tiếp đến ký tự phía sau, mã unicode thấp hơn xếp trước
*/
let M2 = ["aaa", "a", "c"];
let sortedM2 = M2.sort();
console.log(sortedM2);

// Ví dụ với ký tự số (vì xếp theo unicode nên kq không như mong muốn)
let M3 = [10000, 1, 9];
let sortedM3 = M3.sort();
console.log(sortedM3); // [1, 10000, 9]
console.log("1".charCodeAt()); // 49
console.log("9".charCodeAt()); // 57
console.log("0".charCodeAt()); // 48

// 2. So sánh với hàm so sánh Compare Function
/*
Nếu compareFunction(a, b) trả về một giá trị < 0, a sẽ được đặt trước b
Nếu compareFunction(a, b) trả về 0, thứ tự giữa a và b không thay đổi
Nếu compareFunction(a, b) trả về một giá trị > 0, b sẽ được đặt trước a
*/
let M4 = [9, 3, 5, 4];
// Trước khi sắp xếp
console.log(M4);
// Sắp xếp tăng dần
let sortedM4 = M4.sort((a, b) => a - b);
console.log(sortedM4); // Output: [3, 4, 5, 9]
// Sắp xếp giảm dần
let sortedM5 = M4.sort((a, b) => b - a); // 5, 4, 3
console.log(sortedM5); // Output: [9, 5, 4, 3]
