// Your code here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair = "*") {
  return function (param = "special") {
    return `You are ${flair}${param}${flair}!`;
  };
}

let Calculator = {};

Calculator.add = function (num1, num2) {
  return num1 + num2;
};

Calculator.subtract = function (num1, num2) {
  return num1 - num2;
};

Calculator.multiply = function (num1, num2) {
  return num1 * num2;
};

Calculator.divide = function (num1, num2) {
  return num1 / num2;
};

function actionApplyer(start, arr) {
  if (arr.length === 0) {
    return start;
  } else {
    arr.forEach((fun) => {
      start = fun(start);
    });
    return start;
  }
}
