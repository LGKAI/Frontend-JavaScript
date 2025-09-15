// 1. Literal Syntax
let a = 5;
let b = 7.5;
console.log(typeof a);
console.log(typeof b);
let check = true;
console.log(typeof check);

let str = "Hôm nay tôi học obj";
console.log(typeof str);

M = ["hoa", "trang", "lan", "mai"];
console.log(typeof M);

// khai báo đối tượng , literal syntax
let student = {
  // key + value
  // thuộc tính
  fullName: "Trần Như Nhộng",
  birthYear: 2005,
  address: {
    city: "Hà Nội",
    country: "Việt Nam",
  },
  scores: [8, 9, 10],
  // phương thức
  getAge: function () {
    return 2024 - this.birthYear;
  },

  // phương thức được viết lại, để trả về 1 thuộc tính
  getAge2: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },

  diemTrungBinh: function () {
    sumScores = this.scores.reduce((a, b) => a + b, 0);
    return sumScores / 3;
  },
};

let teacher = {
  "1 fullName": "Jacob",
  "@address": {
    city: "Hanoi",
    country: "VietNam",
  },
};

// kiểm tra kiểu loại
console.log(typeof student);
console.log(typeof teacher);
//========================================//

// 2. Truy cập thuộc tính: Dot Notation . và Bracket Notation []
// dot notation
console.log(student.fullName);
console.log(student.address);
console.log(student.scores);

// bracket notation - dùng khi key có khoảng trắng hay vi phạm quy tắc đặt tên biến
console.log(teacher["1 fullName"]);
console.log(student["address"]);

// linh động sử dụng [] với biến
// let inputKey = prompt("Mời nhập key: (address, scores)");
let inputKey = "address";
console.log("Truy xuất đến key dùng với tên biến inputKey: ");
console.log(student[inputKey]);

// nếu truy xuất đến 1 key không tồn tại sẽ trả về undefined
// ví dụ nhập vào key: job --> undefined
console.log(student[inputKey]);
console.log(Boolean(student[inputKey]));
if (student[inputKey]) {
  console.log(student[inputKey]);
} else {
  console.log("Key bạn nhập không tồn tại");
}
//========================================//

// 3. Truy cập phương thức
console.log("Truy cập phương thức ");
console.log(student.getAge());
console.log(student.diemTrungBinh());
/*
vấn đề: Giả sử trong chương trình bạn cần gọi nhiều lần hàm getAge()
--> chương trình của bạn sẽ mất nhiều lần tính toán do hàm bị gọi đi gọi lại
*/
// console.log(student.getAge());
// console.log(student.getAge());
// console.log(student.getAge());
// console.log(student.getAge());

// gọi phương thức getAge2()
student.getAge2();
// xuất thử tuổi thông qua thuộc tính age mới được thêm từ phương thức getAge2()
console.log(student.age);
//========================================//

// 4. Thêm, sửa, xóa thuộc tính (thêm cặp key value)
student.email = "tuhoc.cc@gmail.com"; // thêm mới thuộc tính
student["website"] = "http://tuhoc.cc"; // thêm mới thuộc tính

// xuất đối tượng để xem
console.log(student);
console.log(student.email);
console.log(student.website);

// xóa bỏ thuộc tính
delete student.email;
console.log(student); // đã mất thuộc tính email

// sửa thuộc tính
student.website = "giá trị đã bị sửa";
console.log(student);
