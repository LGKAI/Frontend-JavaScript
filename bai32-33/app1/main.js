//1. concat(): Nối mảng hiện tại với mảng khác và trả về một mảng mới
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let newArr = arr1.concat(arr2);
console.log(newArr);
console.log(arr1);
console.log(arr2);

//2. push(): Thêm một hoặc nhiều phần tử vào cuối mảng gốc
let arr3 = [1, 2, 3];
arr3.push(4, 5);
console.log(arr3);

//3. unshift(): Thêm một hoặc nhiều phần tử vào đầu mảng gốc
let arr4 = [1, 2];
arr4.unshift(0, 1, "nam");
console.log(arr4);

//4. pop(): Loại bỏ phần tử cuối cùng của mảng và trả về phần tử đã bị loại bỏ
let arr5 = [1, 2, 3, "nam"];
let removedElement = arr5.pop();
console.log(arr5);
console.log(removedElement);

//5. shift(): Loại bỏ phần tử đầu tiên của mảng và trả về phần tử đã bị loại bỏ
let arr6 = [1, 2, 3];
let removedElement2 = arr6.shift();
console.log(arr6);
console.log(removedElement2);

//6. slice(start, end): Tạo một bản sao của mảng cắt từ start đến end-1
//từ một vị trí bắt đầu đến một vị trí kết thúc (không bao gồm vị trí kết thúc)
let arr7 = [1, 2, 3, 4, 5];
let sliceArr = arr7.slice(1, 4);
console.log(arr7);
console.log(sliceArr);

//7. includes(): Kiểm tra xem một mảng có chứa một giá trị cụ thể hay không
//trả về true nếu có và false nếu không
let arr8 = [1, 2, 3, 4, 5, "nam"];
let isPresent = arr8.includes("hung");
console.log(isPresent);

//8. indexOf(): Trả về vị trí index của phần tử xuất hiện lần đầu tiên trong mảng nếu tìm thấy
//trả về -1 nếu không tìm thấy
let arr9 = [1, 2, 3, 4, 5, 2, 6, 7];
let indexElement = arr9.indexOf(20);
console.log(indexElement);

//9. lastIndexOf(): Trả về vị trí index của phần tử xuất hiện lần cuối cùng trong mảng nếu tìm thấy
//trả về -1 nếu không tìm thấy
let arr10 = [1, 2, 3, 4, 5, 2, 6, 7];
let lastIndex = arr10.lastIndexOf(20);
console.log(lastIndex);

//10. reverse(): Đảo ngược thứ tự của các phần tử trong mảng gốc
//nó thay đổi mảng gốc và không tạo ra mảng mới
let arr11 = [1, 3, 5, 7, 9];
arr11.reverse();
console.log(arr11);
//lưu ý: reverse làm thay đổi mảng gốc
//nếu muốn giữ nguyên bản gốc, hãy reverse trên bản sao
let arr12 = [1, 3, 5, 7, 9];
let arr13 = arr12.slice().reverse();
console.log(arr12);
console.log(arr13);

//11. join(): Nối các phần tử trong mảng thành chuỗi, theo kí tự phân tách separator
//separator nếu bỏ trống sẽ mặc định là dấu phẩy
//phương thức này không thay đổi mảng gốc

//không truyền separator
let arr14 = ["nam", "trang", 1, 2, 3];
let string1 = arr14.join();
console.log(string1);
console.log(typeof string1);

//có truyền separator
let arr15 = ["nam", "trang", 1, 2, 3];
let string2 = arr15.join(" % ");
console.log(string2);

//12. splice():  array.splice(start, deleteCount, item1, item2, ...);
//start: chỉ định vị trí bắt đầu thay đổi mảng, nếu là một số âm, nó sẽ được tính từ cuối mảng
//deleteCount: số nguyên chỉ định số lượng phần tử sẽ bị loại bỏ từ mảng, bắt đầu từ vị trí start, nếu deleteCount là 0, không có phần tử nào bị loại bỏ
//item1, item2,...: các phần tử mới sẽ được thêm vào mảng từ vị trí start

//loại bỏ phần tử từ mảng
let arr011 = [1, 2, 3, 4, 5];
arr011.splice(-2, 2); //xóa từ vị trí index -2 , xóa đi 2 phần tử
console.log(arr011);

let arr012 = [1, 2, 3, 4, 5];
arr012.splice(2, 1, 6); //xóa từ vị trí index 2, xóa đi 1 phần tử
//thêm phần tử 6 từ vị trí index 2
console.log(arr012);

//thêm phần tử vào mảng
let arr013 = [1, 2, 3, 4, 5];
arr013.splice(2, 0, 6, 7, 8, 9);
//xóa 0 phần tử, thêm 6, 7, 8, 9 vào mảng từ vị trí index 2
console.log(arr013);
