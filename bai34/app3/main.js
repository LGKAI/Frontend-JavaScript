// Function() constructor: Hàm tạo - sử dụng để tạo khuôn mẫu (prototype)
// ôn tập
const student = {
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

  diemTrungBinh: function () {
    sumScores = this.scores.reduce((a, b) => a + b, 0);
    return sumScores / 3;
  },
};

const student2 = {
  // thuộc tính
  fullName: "Trần Văn B",
  birthYear: 2004,
  address: {
    city: "Tuyên Quang",
    country: "Việt Nam",
  },
  scores: [7, 6, 5],
  // phương thức
  getAge: function () {
    return 2024 - this.birthYear;
  },

  diemTrungBinh: function () {
    sumScores = this.scores.reduce((a, b) => a + b, 0);
    return sumScores / 3;
  },
};

// function constructor
// viết hoa chữ cái đầu để phân biệt với các hàm thông thường
// cách 1: function expression (ít dùng)
const SinhVien = function (fullName, ID, birthYear, homeTown) {
  // thuộc tính
  this.fullName = fullName;
  this.ID = ID;
  this.birthYear = birthYear;
  this.homeTown = homeTown;
  // phương thức
  this.showInfo = function () {
    return `${this.fullName} ${this.ID} ${this.homeTown}`;
  };
};

// cách 2: function declaration (thường dùng hơn)
function Student(fullName, ID, birthYear, homeTown) {
  // thuộc tính
  this.fullName = fullName;
  this.ID = ID;
  this.birthYear = birthYear;
  this.homeTown = homeTown;
  // phương thức
  this.showInfo = function () {
    return `${this.fullName} ${this.ID} ${this.homeTown}`;
  };
}

// tạo các đối tượng cụ thể (instance - 1 thể hiện) từ hàm tạo Student
const sv1 = new Student("Nguyễn Văn A", "2024001", 2005, "Nam Định");
const sv2 = new Student("Nguyễn Văn B", "2024002", 2004, "Hà Nội");

// truy cập thuộc tính và phương thức của đối tượng
console.log(sv1.fullName);
console.log(sv1["fullName"]);
console.log(sv2.fullName);
console.log(sv2.showInfo());

// sv1 và sv2 có thể gọi là các đối tượng cụ thể, hoặc gọi là các instance (thể hiện)
let abc = 5;
console.log("Kiểm chứng instance");
console.log(sv1 instanceof Student);
console.log(abc instanceof Student);

// thêm, sửa, xóa thuộc tính
sv2.email = "tuhoc.cc@gmail.com";
sv2.fullName = " Tên đã bị sửa";
delete sv2.homeTown;
console.log(sv2);
