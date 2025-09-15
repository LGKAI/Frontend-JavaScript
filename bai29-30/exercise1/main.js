/*
Nhập vào 1 chuỗi từ bàn phím, đếm xem có bao nhiêu ký tự thường, in hoa, số, space
Test case: 123AbcDD
Số ký tự thường: 2
Số ký tự in hoa: 3
Số chữ số: 3
Số khoảng trắng: 0
*/
const inputString = prompt("Nhập vào một chuỗi");

let lowerCaseCount = 0;
let upperCaseCount = 0;
let digitCount = 0;
let spaceCount = 0;

console.log(inputString.length);
for (let i = 0; i < inputString.length; i++) {
  console.log(inputString[i]);
  let char = inputString[i];
  if (char >= "a" && char <= "z") {
    lowerCaseCount++;
  } else if (char >= "A" && char <= "Z") {
    upperCaseCount++;
  } else if (char >= "0" && char <= "9") {
    digitCount++;
  } else if (char === " ") {
    spaceCount++;
  }
}

console.log("Số ký tự thường: " + lowerCaseCount);
console.log("Số ký tự in hoa: " + upperCaseCount);
console.log("Số ký tự số: " + digitCount);
console.log("Số khoảng trắng: " + spaceCount);
