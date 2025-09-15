// Event - DOM Level 0 Event Handling
// DOM Level 0 Event Handling là phương pháp bắt sự kiện bằng cách gán trực tiếp
// một hàm JS cho thuộc tính sự kiện của phần tử HTML
/*
// Ví dụ 1
// 1. Xác định phần tử có id là btn
const button1 = document.getElementById("btn");

// 2. Gán sự kiện click cho btn, sử dụng function expression
// button1.onclick = function () {
//   alert("Bạn đã click vào button");
// };

// 3. Dùng function declaration khai báo hàm, sau đó gán hàm đó cho sự kiện click
// function clickHandler() {
//   alert("Bạn đã click vào button");
// }

// button1.onclick = clickHandler;

// 4. Hoặc dùng arrow function
button1.onclick = () => {
  alert("Bạn đã click vào button");
};

// Ví dụ 2
function mouseOver() {
  document.getElementById("message").textContent = "Mouse is over the button";
}

function mouseOut() {
  document.getElementById("message").textContent = "Mouse left the button";
}

function setup() {
  var button = document.getElementById("btn2");
  button.onmouseover = mouseOver;
  button.onmouseout = mouseOut;
}

// setup();
// Sự kiện onload của đối tượng window được kích hoạt khi toàn bộ trang web đã tải xong
// bao gồm tất cả các tài nguyên như hình ảnh, script và stylesheet
window.onload = setup;
*/

// Event - addEventListener
// 1. Lấy phần tử
const btn = document.getElementById("btn3");
// 2. Thêm sự kiện
// 2.1 Sử dụng với function expression
// btn.addEventListener("click", function () {
//   alert("Bạn đã click vào button");
// });
// 2.2 Sử dụng với function declaration
// function handleClick() {
//   alert("Bạn đã click vào button");
// }
// btn.addEventListener("click", handleClick);
// 2.3 Sử dụng với arrow function
btn.addEventListener("click", () => {
  alert("Bạn đã click vào button");
});

// 3. Lợi ích của addEventListener
// 3.1 Có thể thêm nhiều sự kiện cho cùng 1 phần tử
// Lấy phần tử
const btn4 = document.getElementById("btn4");
// Hàm xử lý sự kiện 1
function handleClick1() {
  alert("Đây là sự kiện 1");
}

// Hàm xử lý sự kiện 2
function handleClick2() {
  alert("Đây là sự kiện 2");
}
// Thêm sự kiện
// btn4.addEventListener("click", handleClick1);
// btn4.addEventListener("click", handleClick2);
// Thử với cách cũ DOM Level 0 Event Handling
// Không thể thêm cùng 1 sự kiện cho 1 phần tử
// btn4.onclick = handleClick1;
// btn4.onclick = handleClick2;
// Về cơ bản sự kiện 1 sẽ bị ghi đè bởi sự kiện 2

// 3.2 Có thể xóa sự kiện
// btn4.removeEventListener("click", handleClick1);
// 3.3 Có thể sử dụng sự kiện với options
btn4.addEventListener("click", handleClick1, { once: true });
btn4.addEventListener("click", handleClick2);
