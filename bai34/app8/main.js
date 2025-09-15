// JS Inheritance ES6
// Định nghĩa lớp cơ sở School
class School {
  constructor(id, name, birthYear) {
    this.id = id;
    this.name = name;
    this.birthYear = birthYear;
  }

  // Phương thức của lớp School
  calcAge(currentYear) {
    return currentYear - this.birthYear;
  }
}

// Lớp Student kế thừa từ lớp School (có thêm thuộc tính và phương thức riêng)
class Student extends School {
  constructor(id, name, birthYear, major) {
    super(id, name, birthYear);
    this.major = major;
  }

  // Phương thức của lớp Student
  study() {
    console.log(`${this.name} is studying ${this.major}`);
  }
}

// Tạo đối tượng của lớp School
const p1 = new School("P2004001", "Messi", 2000);
// Truy cập thuộc tính và phương thức của class School
console.log(p1.id);
console.log(p1.birthYear);
console.log(p1.calcAge(2024));

// Tạo đối tượng của sub class Student
const s1 = new Student("P2004002", "Ronaldo", 2001, "Computer Science");
// Truy cập thuộc tính và phương thức của class School
console.log(s1.id);
console.log(s1.name);
console.log(s1.birthYear);
console.log(s1.calcAge(2024));
// Truy cập thuộc tính và phương thức của sub class Student
console.log(s1.major);
s1.study();
console.log(s1);
