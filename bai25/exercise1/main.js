// Viết hàm giải PT bậc 2
// Cách 1: Function Declaration
function ptb2_1(a, b, c) {
  let delta = b ** 2 - 4 * a * c;
  if (delta > 0) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`PT có 2 nghiệm x1 = ${x1} và x2 = ${x2}`);
  } else if (delta === 0) {
    let x1 = -b / (2 * a);
    console.log(`phương trình có nghiệm kép x1 = x2 = ${x1}`);
  } else {
    console.log("Pt vô nghiệm");
  }
}
ptb2_1(1, 2, -3);
ptb2_1(1, 2, 1);
ptb2_1(1, 1, 1);

// Cách 2: Function Expression
let ptb2_2 = function (a, b, c) {
  let delta = b ** 2 - 4 * a * c;
  if (delta > 0) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`PT có 2 nghiệm x1 = ${x1} và x2 = ${x2}`);
  } else if (delta === 0) {
    let x1 = -b / (2 * a);
    console.log(`phương trình có nghiệm kép x1 = x2 = ${x1}`);
  } else {
    console.log("Pt vô nghiệm");
  }
};
ptb2_2(1, 2, -3);
ptb2_2(1, 2, 1);
ptb2_2(1, 1, 1);

// Cách 3: Arrow Function
let ptb2_3 = (a, b, c) => {
  let delta = b ** 2 - 4 * a * c;
  if (delta > 0) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`PT có 2 nghiệm x1 = ${x1} và x2 = ${x2}`);
  } else if (delta === 0) {
    let x1 = -b / (2 * a);
    console.log(`phương trình có nghiệm kép x1 = x2 = ${x1}`);
  } else {
    console.log("Pt vô nghiệm");
  }
};
ptb2_3(1, 2, -3);
ptb2_3(1, 2, 1);
ptb2_3(1, 1, 1);
