// Document Object Model - Khái quát về DOM
// console.log(document);

// console.log(document.firstElementChild);

// console.log(document.firstElementChild.firstElementChild);
// console.log(document.firstElementChild.lastElementChild);

// DOM - innerHTML and getElement - ById - ByTagName - ByClassName
// getElementsByTagName
console.log("getElementsByTagName: ");
let li_item = document.getElementsByTagName("li");
console.log(li_item); // trả về mảng các phần tử li
// chúng ta có thể kiểm tra xem mảng có ? phần tử
console.log(li_item.length);
// truy xuất và thay đổi 1 phần tử theo vị trí index
li_item[1].innerHTML = "Phần tử li index 1 đã thay đổi";

// getElementsByClassName
console.log("getElementsByClassName: ");
let li_class_item = document.getElementsByClassName("list");
console.log(li_class_item);

li_class_item[1].innerHTML = "Phần tử li index 1 đã thay đổi lần 2";

// getElementById
let el = document.getElementById("list_about");
console.log(el);
// thay đổi text trên biến el
el.innerHTML = "Something about me";

// querySelector and querySelectorAll
// querySelector
// Chọn phần tử có id là "heading_title" và thay đổi nội dung của nó
let title = document.querySelector("#heading_title");
console.log(title);
title.innerHTML = "New Title";

// Chọn phần tử đầu tiên có class là "list" thay đổi nội dung
let firstListItem = document.querySelector(".list");
firstListItem.innerHTML = "Trang chủ";

// Quan trọng, querySelector có thể chọn CSS kết hợp
let firstLinkInList = document.querySelector("ul a");
console.log(firstLinkInList);

// Chọn phần tử input checkbox và đặt thuộc tính checked cho nó
let checkbox = document.querySelector("input");
checkbox.checked = true;

// querySelectorAll
let list_item = document.querySelectorAll("li");
console.log(list_item);
list_item[1].innerHTML = "Liên hệ với chúng tôi";
