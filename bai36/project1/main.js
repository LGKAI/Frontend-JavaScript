// Chọn phần tử cha
const container = document.getElementById("container");

let baseUrl =
  "https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/";

for (let i = 1; i <= 150; i++) {
  // Tạo 1 khối div để chứa phần tử img và số thứ tự
  const newDiv = document.createElement("div");
  // Thêm div vào cuối container và lấy node mới tạo ra gán vào parentDiv
  const parentDiv = container.appendChild(newDiv);
  // Tạo phần tử con, thêm vào trong parentDiv
  const newImg = document.createElement("img");
  newImg.src = `${baseUrl}${i}.png`;
  // Thêm vào trong khối parentDiv
  parentDiv.appendChild(newImg);
  // Thêm thẻ span số thứ tự vào trong parentDiv
  const newSpan = document.createElement("span");
  newSpan.innerText = `#${i}`;
  parentDiv.appendChild(newSpan);
}
