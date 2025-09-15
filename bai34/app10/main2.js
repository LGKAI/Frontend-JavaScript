// Encapsulation
/*
Public fields: trường công khai, trường công cộng
Private fields: trường riêng tư
Public methods: phương thức công khai
Private methods: phương thức riêng tư
*/

class Wallet {
  constructor(bankName, pin) {
    this.bankName = bankName;
    this._pin = pin;
    this._balance = 0; // tài khoản bằng 0 lúc tạo thẻ
  }

  // phương thức gửi tiền vào tài khoản
  deposit(value) {
    this._balance += value;
  }

  // rút tiền
  withdraw(value) {
    if (value > this._balance) {
      console.log("Số tiền trong tài khoản không đủ");
    } else {
      this._balance -= value;
      console.log("Rút tiền thành công");
    }
  }
}

// tạo đối tượng
const wallet = new Wallet("MB bank", "1234");
console.log(wallet._balance);
// gửi tiền
wallet.deposit(1000);
// rút tiền
wallet.withdraw(250);
// xem tài khoản, pin
console.log(wallet._balance);
console.log(wallet._pin);

// bài toán là chúng ta không muốn cho phép truy cập trực tiếp để kiểm tra số dư và mã pin
