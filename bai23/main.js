// javascript for loop
// ví dụ 1:
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// ví dụ 2: xuất các số chẵn từ 0 đến 10
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

//ví dụ 3: tính tổng các số chẵn từ 0 đến 10
let tong = 0;
for (let i = 0; i <= 10; i += 2) {
  tong += i;
}
console.log("Tổng các số chẵn từ 0 đến 10 là " + tong);
