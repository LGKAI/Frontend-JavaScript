// Bài tập Radom Color
const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  // thay đổi màu nền của body
  document.body.style.backgroundColor = changeColor();
  // thay đổi thẻ h1
  const h1 = document.querySelector("#title");
  h1.textContent = changeColor();
});

function changeColor() {
  const r = Math.floor(Math.random() * 256); //0-255
  const g = Math.floor(Math.random() * 256); //0-255
  const b = Math.floor(Math.random() * 256); //0-255
  return `rgb(${r},${g},${b})`;
}
