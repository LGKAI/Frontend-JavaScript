// Viết chương trình nhập vào năm sinh và in ra số tuổi
// Kiểm tra điều kiện dữ liệu năm sinh nhập vào phải là số nguyên, phải lớn hơn 0
function calculateAge(inputYear) {
  // ép kiểu dữ liệu truyền vào sang kiểu Number
  let yearOfBirth = Number(inputYear);
  console.log(yearOfBirth);
  // kiểm tra xem năm sinh có phải là số nguyên và lớn hơn 0 không
  if (!Number.isInteger(yearOfBirth) || yearOfBirth <= 0) {
    alert("Năm sinh không hợp lệ. Năm sinh phải là số nguyên lớn hơn 0!!!");
    return;
  }
  // lấy năm hiện tại
  let currentYear = new Date().getFullYear();
  // tính tuổi
  let age = currentYear - yearOfBirth;
  alert(`Mày ${age} tuổi!`);
}

// nhập năm sinh từ người dùng
let inputYear = prompt("Nhập năm sinh của mày:");
// gọi hàm tính tuổi
calculateAge(inputYear);
