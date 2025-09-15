// Viết chương trình có tên timeSince, thông báo người dùng đã offline bao lâu
function timeSince(timestamp) {
  let now = new Date();
  console.log("Xem thử timestamp hiện tại: " + now.getTime());
  let timeDifference = now - timestamp;
  let second = Math.floor(timeDifference / 1000);
  let minute = Math.floor(second / 60);
  let hour = Math.floor(minute / 60);
  let day = Math.floor(hour / 24);
  let month = Math.floor(day / 30);
  let year = Math.floor(month / 12);

  if (year > 0) {
    return `Online ${year} năm trước`;
  } else if (month > 0) {
    return `Online ${month} tháng trước`;
  } else if (day > 0) {
    return `Online ${day} ngày trước`;
  } else if (hour > 0) {
    return `Online ${hour} giờ trước`;
  } else if (minute > 0) {
    return `Online ${minute} phút trước`;
  } else if (second > 0) {
    return `Online ${second} giây trước`;
  }
}

let timeOffline = 0; // thời điểm offline
console.log(timeSince(timeOffline));
