// getter and setter
class School {
  constructor(id, name, birthYear, score) {
    this.id = id;
    this.name = name;
    this.birthYear = birthYear;
    this._score = score;
    // thêm dấu _ vào trước tên thuộc tính để thể hiện nó ở trạng thái protected
    // và không nên truy cập, sửa đổi trực tiếp từ bên ngoài
  }

  // phương thức
  calcAge(currentYear) {
    return currentYear - this.birthYear;
  }

  // getter cho thuộc tính score
  get score() {
    return this._score;
  }

  // setter cho thuộc tính score
  set score(value) {
    // thêm các biểu thức logic để kiểm tra
    if (value >= 0 && value <= 100) {
      this._score = value;
    } else {
      console.log("Điểm số không hợp lệ");
    }
  }
}

// tạo đối tượng
const john = new School("p2024001", "John", 2001, 95);
console.log(john.id);
console.log(john.birthYear);
console.log(john.name);
console.log(john._score); // không nên truy cập trực tiếp
console.log(john.calcAge(2024));

// sử dụng getter
console.log(john.score);
// sử dụng setter
john.score = 75;

console.log(john.score);
