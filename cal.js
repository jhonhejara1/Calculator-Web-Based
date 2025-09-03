let num1 = '';
let num2 = '';
let operator = '';

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    alert("Cannot divide by zero!");
    return 0;
  }
  return a / b;
}

function appendValue(value) {
  document.getElementById('display').value += value;
}

function setOperation(op) {
  num1 = parseFloat(document.getElementById('display').value);
  operator = op;
  document.getElementById('display').value = '';
}

function calculate() {
  num2 = parseFloat(document.getElementById('display').value);
  let result = 0;

  switch (operator) {
    case '+':
      result = add(num1, num2);
      break;
    case '-':
      result = subtract(num1, num2);
      break;
    case '*':
      result = multiply(num1, num2);
      break;
    case '/':
      result = divide(num1, num2);
      break;
  }

  document.getElementById('display').value = result;
  num1 = result; // keep result for next operation
}

function clearDisplay() {
  document.getElementById('display').value = '';
  num1 = '';
  num2 = '';
  operator = '';
}
