// DOM - removeChild & remove
//✔ 1. removeChild
// Cú pháp: parentElement.removeChild(childElement)
// Chọn phần tử cần xóa
let childElm = document.querySelector("#item2");
// Chọn phần tử cha của phần tử cần xóa
let ul = document.querySelector("#list");
// Xóa phần tử removeChild
ul.removeChild(childElm);

// Hoặc cách 2 ngắn gọn hơn, dùng kiến thức đã học để không cần chọn phần tử cha
// Lấy phần tử cần xóa
let childElm2 = document.querySelector("#item3");
childElm2.parentElement.removeChild(childElm2);

//✔ 2. remove
// Cú pháp: element.remove()
// Chọn phần tử cần xóa
let childElm3 = document.querySelector("#item4");
// Xóa phần tử
childElm3.remove();
