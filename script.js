"use strict";
//
// many tumes actions
// 0 from start
//
const reset = document.querySelector(`.reset`);
const change = document.querySelector(`.change`);
const percents = document.querySelector(`.percents`);
const division = document.querySelector(`.division`);
const seven = document.querySelector(`.seven`);
const eight = document.querySelector(`.eight`);
const nine = document.querySelector(`.nine`);
const multiply = document.querySelector(`.multiply`);
const four = document.querySelector(`.four`);
const five = document.querySelector(`.five`);
const six = document.querySelector(`.six`);
const minus = document.querySelector(`.minus`);
const one = document.querySelector(`.one`);
const two = document.querySelector(`.two`);
const three = document.querySelector(`.three`);
const plus = document.querySelector(`.plus`);
const zero = document.querySelector(`.zero`);
const dot = document.querySelector(`.dot`);
const equal = document.querySelector(`.equal`);
//
//
let dispValue = ``;
document.querySelector(`.display`).value = String(dispValue);
let savedValue = ``;
let action = ``;
let dotInp = ``;
//
//
// action func - each number button into value variable
const pressButtonAction = (button, number) => {
  if (dispValue[0] === `0` && dispValue[1] !== `.`) {
    dispValue = parseFloat(dispValue);
  }
  document.querySelector(button).value = number;
  dispValue = String(dispValue + number);
};
// set variable on screen
const onScreen = () => {
  document.querySelector(`.display`).value = String(dispValue);
};

//equal function
const equalFunc = () => {
  if (action === `/`) {
    dispValue = savedValue / parseFloat(dispValue);
    onScreen(dispValue);
  } else if (action === `*`) {
    dispValue = savedValue * parseFloat(dispValue);
    onScreen(dispValue);
  } else if (action === `-`) {
    dispValue = savedValue - parseFloat(dispValue);
    onScreen(dispValue);
  } else if (action === `+`) {
    dispValue = savedValue + parseFloat(dispValue);
    onScreen(dispValue);
  } else if (action === ``) {
    onScreen(dispValue);
  }
  console.log(`saved-`, savedValue, `display-`, dispValue, `action-`, action);
};
// do action func (save number to variable and clean the display variable)
const actionFunc = () => {
  dispValue = parseFloat(dispValue);
  savedValue = parseFloat(dispValue);
  dispValue = ``;
};

// equal action
equal.addEventListener(`click`, () => {
  equalFunc();
});
//------------------------------------------
// action button functions ( reset, change symbol, percents)
reset.addEventListener(`click`, () => {
  dispValue = ``;
  savedValue = ``;
  action = ``;
  onScreen(dispValue);
});
change.addEventListener(`click`, () => {
  if (dispValue !== ``) {
    dispValue = parseFloat(dispValue);
    dispValue = dispValue * -1;
    onScreen(dispValue);
  }
});
percents.addEventListener(`click`, () => {
  dispValue = parseFloat(dispValue);
  dispValue = dispValue * 0.01;
  onScreen(dispValue);
});

// action button functions ( div, multi, minus, plus)
division.addEventListener(`click`, () => {
  action = `/`;
  actionFunc();
});
multiply.addEventListener(`click`, () => {
  action = `*`;
  actionFunc();
});
minus.addEventListener(`click`, () => {
  if (dispValue === ``) {
    dispValue = `-`;
  } else {
    action = `-`;
    actionFunc();
  }
});
plus.addEventListener(`click`, () => {
  action = `+`;
  actionFunc();
});
//---------------------------------------
//----------DOT ACTION-------------------
//---------------------------------------
const dotAction = (dispValue) => {
  pressButtonAction(`.dot`, `.`);
  dispValue = String(dispValue) + `.`;
  dotInp = `.`;
};
dot.addEventListener(`click`, () => {
  if (dispValue.includes(`.`)) {
    onScreen(dispValue);
  } else if (dispValue === ``) {
    dispValue = `0.`;
    onScreen(dispValue);
  } else {
    dotAction(dispValue);
    onScreen(dispValue);
  }
});
//---------------------------------------
//---------------------------------------
//numbers 1-0 -------
one.addEventListener(`click`, () => {
  pressButtonAction(`.one`, `1`);
  onScreen(dispValue);
});
two.addEventListener(`click`, () => {
  pressButtonAction(`.two`, `2`);
  onScreen(dispValue);
});
three.addEventListener(`click`, () => {
  pressButtonAction(`.three`, `3`);
  onScreen(dispValue);
});
four.addEventListener(`click`, () => {
  pressButtonAction(`.four`, `4`);
  onScreen(dispValue);
});
five.addEventListener(`click`, () => {
  pressButtonAction(`.five`, `5`);
  onScreen(dispValue);
});
six.addEventListener(`click`, () => {
  pressButtonAction(`.six`, `6`);
  onScreen(dispValue);
});
seven.addEventListener(`click`, () => {
  pressButtonAction(`.seven`, `7`);
  onScreen(dispValue);
});
eight.addEventListener(`click`, () => {
  pressButtonAction(`.eight`, `8`);
  onScreen(dispValue);
});
nine.addEventListener(`click`, () => {
  pressButtonAction(`.nine`, `9`);
  onScreen(dispValue);
});
zero.addEventListener(`click`, () => {
  if (dispValue === `0`) {
    onScreen(dispValue);
  } else {
    pressButtonAction(`.zero`, `0`);
    onScreen(dispValue);
  }
});
