// Viết chương trình đếm ngược thời gian theo từng giây (countdown)
// Ví dụ thời gian làm bài là 45p, nếu chạy về 0 thì thông báo hết thời gian
function countdown(minute) {
  alert("Thời gian làm bài của mày là " + minute + " phút!");
  let second = minute * 60;

  let countdownInterval = setInterval(function () {
    let minuteLeft = Math.floor(second / 60);
    let secondLeft = second % 60;
    let prefixSecondFormat = secondLeft < 10 ? "0" : "";
    console.log(`${minuteLeft}:${prefixSecondFormat}${secondLeft}`);

    if (second <= 0) {
      clearInterval(countdownInterval);
      alert("Hết thời gian cmnr!!!");
    } else {
      second--;
    }
  }, 1000);
}

let timeInput = Number(prompt("Làm bài trong mấy phút???"));
// gọi hàm
countdown(timeInput);
