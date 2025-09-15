// replace (oldValue, newValue), repeat(count) in js
// string.replace(oldValue, newValue);
let s14 = "123 học học nữa học mãi";
console.log(s14.replace("học", "ngủ"));

// để thay thế tất cả dùng biểu thức chính quy (regular expression)
console.log(s14.replace(/học/g, "ngủ"));

// string.repeat(count); count: số lần lặp chuỗi
let s23 = "Hello, ";
let s24 = s23.repeat(3);
console.log(s24); // Hello, Hello, Hello,
