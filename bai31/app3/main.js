// setInterval in js
// setInterval(function, milliseconds,param1, param2,...);

// Ví dụ 1: với function declaration
function showNotification() {
  console.log("Bạn có xxx tin nhắn chưa đọc");
}
// setInterval(showNotification, 2000);

// Ví dụ 2:
function updateTime() {
  let currentTime = new Date();
  console.log(currentTime);
}
// setInterval(updateTime, 1000);

let counter = 0;
// 1. function declaration
// function count() {
//   console.log(counter++);
// }

// 2. function expression
// let count = function () {
//   console.log(counter++);
// };

// 3. arrow function
// let count = () => {
//   console.log(counter++);
// };

// setInterval(count, 1000);

// 4. huỷ lặp
let count = () => {
  console.log(counter++);
  if (counter === 5) {
    // Step 2: Dừng lặp dùng clearInterval
    clearInterval(stopInterval);
  }
};

// Step 1: Gán biến để nhận giá trị trả về
let stopInterval = setInterval(count, 1000);
