// Encapsulation
/*
Public fields: trường công khai, trường công cộng
Private fields: trường riêng tư
Public methods: phương thức công khai
Private methods: phương thức riêng tư
*/

class Wallet {
  #pin; // private field
  #balance; // private field
  #isPinEntered = false; // private field
  constructor(bankName, pin) {
    this.bankName = bankName;
    this.#pin = pin;
    this.#balance = 0; // tài khoản bằng 0 lúc tạo thẻ
  }

  // phương thức gửi tiền vào tài khoản
  deposit(value) {
    if (!this.#isPinEntered) {
      console.log("Kiểm tra lại mã pin");
      return;
    }
    this.#balance += value;
  }

  // Private method
  #validatePin(pin) {
    return this.#pin === pin;
  }

  // Public method
  enterPin(pin) {
    if (this.#validatePin(pin)) {
      this.#isPinEntered = true;
    } else {
      console.log("Invalid pin");
    }
  }

  // rút tiền
  withdraw(value) {
    if (!this.#isPinEntered) {
      console.log("Kiểm tra lại mã pin");
      return;
    }
    if (value > this.#balance) {
      console.log("Số tiền trong tài khoản không đủ");
    } else {
      this.#balance -= value;
      console.log("Rút tiền thành công");
    }
  }

  // getter
  get balance() {
    if (!this.#isPinEntered) {
      console.log("Kiểm tra lại mã pin");
      return;
    }
    return this.#balance;
  }
}

// tạo đối tượng
const wallet = new Wallet("MB bank", "1234");
// nhập mã pin
wallet.enterPin("1234");
// console.log(wallet.#balance);
// gửi tiền
wallet.deposit(1000);
// rút tiền
wallet.withdraw(250);
// xem tài khoản, pin
// console.log(wallet.#balance);
// console.log(wallet.#pin);
console.log(wallet.balance);
